import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Headphones2() {
  return (
    <div>
      <div className="container">
        <Link to="/headphones">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/image-product.jpg"}
        title="XX99 MARK I HEADPHONES"
        title1="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.  "
        title2="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
        title3=" From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        price={1750}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-4.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-5.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-6.jpg"}
        pic1={process.env.PUBLIC_URL + "cart/xx99-mark-1.jpg"}
        tit1="XX99 MARK II"
        pic2={process.env.PUBLIC_URL + "cart/xx59.jpg"}
        tit2="XX59"
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

export default Headphones2;
