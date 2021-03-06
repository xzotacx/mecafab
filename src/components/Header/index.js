import React from "react";
import Caroudel from "../Carousel";

import image1 from "../../assets/images/Image-1.webp";
import image2 from "../../assets/images/Image-2.webp";
import image3 from "../../assets/images/Image-3.webp";

function Header() {
  return (
    <>
      <Caroudel
        content={[
          {
            component: <h1 style={{ color: "white" }}>MecaFab Mundo</h1>,
            image: image1,
          },
          {
            component: <h1 style={{ color: "white" }}>Guaiber Mundo</h1>,
            image: image2,
          },
          {
            component: <h1 style={{ color: "white" }}>Guaiber Baner</h1>,
            image: image3,
          },
        ]}
      />
    </>
  );
}

export default Header;
