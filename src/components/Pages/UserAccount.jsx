import { useEffect, useState } from "react";
import classes from "./UserAccount.module.css";
import BasicMap from "../Map/BasicMap";
import SubHeader from "../Layout/SubHeader";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

const UserAccount = () => {
  const [userName, setUserName] = useState("");
  const [userApellido, setUserApellido] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [dirCalle, setDirCalle] = useState("");
  const [dirNumero, setDirNumero] = useState("");
  const [dirSector, setDirSector] = useState("");
  const [dirCodigoPostal, setDirCodigoPostal] = useState("");
  const [userAddressInfo, setUserAddressInfo] = useState("");
  const auth = useAuthUser();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`/api/account/${auth().email}`);

        if (response.status === 200) {
          const userData = await response.data.user;
          setUserName(userData.name);
          setUserEmail(userData.email);
          setDirCalle(userData.address.street);
          setDirNumero(userData.address.number);
          setDirSector(userData.address.sector);
          setDirCodigoPostal(userData.address.postalCode);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userApellidoHandler = (event) => {
    setUserApellido(event.target.value);
  };

  const userEmailHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const dirCalleHandler = (event) => {
    setDirCalle(event.target.value);
    setUserAddressInfo("");
  };

  const dirNumeroHandler = (event) => {
    setDirNumero(event.target.value);
  };

  const dirSectorHandler = (event) => {
    setDirSector(event.target.value);
    setUserAddressInfo("");
  };

  const dirCodigoPostalHandler = (event) => {
    setDirCodigoPostal(event.target.value);
    setUserAddressInfo("");
  };

  const userAddressInfoHandler = (event) => {
    setUserAddressInfo(event.address);
  };

  useEffect(() => {
    if (userAddressInfo.residential) {
      setDirCalle(userAddressInfo.road);
      setDirCodigoPostal(userAddressInfo.postcode);
    } else if (userAddressInfo) {
      setDirCalle(userAddressInfo.road);
      setDirSector(userAddressInfo.neighbourhood);
      setDirCodigoPostal(userAddressInfo.postcode);
    }
  }, [userAddressInfo]);

  const updateUserDataHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/account/${auth().email}`, {
        name: userName,
        lastName: userApellido,
        address: {
          number: dirNumero,
          street: dirCalle,
          sector: dirSector,
          postalCode: dirCodigoPostal,
        },
      });

      alert("Update successsful.");
    } catch (error) {
      alert("Update failed. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className={classes.body}>
      <SubHeader />
      <div className={classes["user-account"]}>
        <div className={classes.container}>
          <div>
            <p>Contact Information: </p>
          </div>
          <form className={classes.form} onSubmit={updateUserDataHandler}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              placeholder="John"
              required
              value={userName}
              onChange={userNameHandler}
            />
            <label htmlFor="last-name">Apellido:</label>
            <input
              type="text"
              id="last-name"
              placeholder="Doe"
              value={userApellido}
              onChange={userApellidoHandler}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="your@email.com"
              required
              value={userEmail}
              onChange={userEmailHandler}
            />
            <div className={classes.address}>
              <p htmlFor="address">Dirección:</p>
              <label htmlFor="calle">Calle:</label>
              <input
                type="text"
                id="calle"
                name="calle"
                placeholder="Avenida Sarasota"
                required
                value={dirCalle}
                onChange={dirCalleHandler}
              />
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                name="numero"
                placeholder="131"
                required
                value={dirNumero}
                onChange={dirNumeroHandler}
              />
              <label htmlFor="sector">Sector:</label>
              <input
                type="text"
                id="sector"
                name="sector"
                placeholder="Bella Vista"
                required
                value={dirSector}
                onChange={dirSectorHandler}
              />
              <label htmlFor="codigoPostal">Código Postal:</label>
              <input
                type="text"
                id="codigoPostal"
                name="codigoPostal"
                placeholder="12345"
                maxLength={5}
                value={dirCodigoPostal}
                onChange={dirCodigoPostalHandler}
              />
            </div>
            <button className={classes.button}>
              Guardar
            </button>
          </form>
          <BasicMap userAddressInfo={userAddressInfoHandler} />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
