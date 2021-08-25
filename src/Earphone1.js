import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Earphone1() {
  return (
    <div>
      <div className="container">
        <Link to="/earphones">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/image-yx1-earphones.jpg"}
        title="YX1 WIRELESS EARPHONES"
        title1="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        title2="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
        title3="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
        price={599}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-16.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-17.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-18.jpg"}
        pic1={process.env.PUBLIC_URL + "cart/image-product.jpg"}
        tit1=" XX99 MARK I"
        pic2={process.env.PUBLIC_URL + "cart/xx59.jpg"}
        tit2="XX59"
        pic3={process.env.PUBLIC_URL + "cart/image-zx9.jpg"}
        tit3=" ZX9 SPEAKER"
        val1="2x"
        box1="Earphone Unit"
        val2="6x"
        box2="Multi-size Earplugs"
        val3="1x"
        box3="User Manual"
        val4="1x"
        box4="USB-C Charging Cable"
        val5="1x"
        box5="Travel Pouch"
      />
    </div>
  );
}

export default Earphone1;
