import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Headphones3() {
  return (
    <div>
      <div className="container">
        <Link to="/headphones">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/xx59.jpg"}
        title="XX99 MARK I HEADPHONES"
        title1="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        title2="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
        title3=" More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
        price={899}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-7.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-8.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-9.jpg"}
        pic1={process.env.PUBLIC_URL + "cart/image9.jpg"}
        tit1="XX99 MARK II"
        pic2={process.env.PUBLIC_URL + "cart/image-product.jpg"}
        tit2="XX99 MARK I"
        pic3={process.env.PUBLIC_URL + "cart/image-zx9.jpg"}
        tit3="ZX9 SPEAKER"
        val1="1x"
        box1="Headphone Unit"
        val2="2x"
        box2="Replacement Earcups"
        val3="1x"
        box3="User Manual"
        val4="1x"
        box4="3.5mm 5m Audio Cable"
        val5=""
        box5=""
      />
    </div>
  );
}

export default Headphones3;
