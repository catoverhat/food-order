import { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";
import MapConfig from "./MapConfig";
import "leaflet/dist/leaflet.css";
import classes from "./BasicMap.module.css";
import "leaflet-geosearch/dist/geosearch.css";

const BasicMap = ({ userAddressInfo }) => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 18.454031628978374,
    lng: -69.94190509053495,
  });
  const drBounds = L.latLngBounds(
    L.latLng(18.53088, -70.04264), // South West
    L.latLng(18.42017, -69.79906) // North East
  );

  const drProvider = new OpenStreetMapProvider({
    params: {
      bounded: 1,
      viewbox: drBounds.toBBoxString(),
      countrycodes: "do",
      clickable: true,
    },
  });

  const ZOOM_LEVEL = 15;
  const markerRef = useRef();
  // const searchControlRef = useRef();

  const SearchControl = () => {
    const map = useMap();
    useEffect(() => {
      // const provider = new OpenStreetMapProvider();

      const searchControl = new GeoSearchControl({
        provider: drProvider,
        style: "button",
        notFoundMessage: "Sorry, that address could not be found.",
      });

      // Add the search control to the map
      map.addControl(searchControl);
      // searchControlRef.current = searchControl;

      // Remove the search control when the component unmounts
      return () => {
        map.removeControl(searchControl);
      };
    }, [map]);

    return null;
  };

  const AddressInfo = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const direction = await response.json();
      userAddressInfo(direction);
    } catch (error) {
      console.error(error);
    }
  };

  const onMarkerDragEnd = (event) => {
    const marker = event.target;
    const { lat, lng } = marker.getLatLng();
    AddressInfo(lat, lng);
  };

  const MarkerClickPosition = () => {
    const map = useMapEvent("click", (event) => {
      setMarkerPosition([event.latlng.lat, event.latlng.lng]);
      AddressInfo(event.latlng.lat, event.latlng.lng);
    });

    return null;
  };

  return (
    <MapContainer
      className={classes.mapContainer}
      center={markerPosition}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={MapConfig.maptiler.url}
        attribution={MapConfig.maptiler.attribution}
      />
      <SearchControl />
      <MarkerClickPosition />
      <Marker
        draggable={true}
        position={markerPosition}
        ref={markerRef}
        eventHandlers={{
          dragend: onMarkerDragEnd,
        }}
      >
        <Popup>We are Here :)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default BasicMap;
