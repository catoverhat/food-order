// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel = () => {
  const Height = "100%";
  const Width = "100%";
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        autoplay: true,
        width: '100%',
        height: "50rem",
        drag: false,
        // trimSpace: true,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img
          width={Width}
          height={Height}
          src="https://beef-restaurant.com/wp-content/uploads/2017/10/BEEF-MENU-ETE-2017-3.jpg"
          alt="Roast Beef Tenderloin with Mushroom Ragout"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          width={Width}
          height={Height}
          src="https://drive.google.com/uc?export=view&id=1iE3exP2NWn01TGnmMjaZDqPbE5wS4Nkx"
          alt="Shortcut Chicken Enchiladas"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
