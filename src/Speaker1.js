import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Speaker1() {
  return (
    <div>
      <div className="container">
        <Link to="/speakers">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/image-zx9.jpg"}
        title="ZX9 SPEAKER"
        title1="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        title2="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
        title3=" Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        price={4500}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-10.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-11.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-12.jpg"}
        pic1={process.env.PUBLIC_URL + "cart/image-zx7.jpg"}
        tit1="ZX7 SPEAKER"
        pic2={process.env.PUBLIC_URL + "cart/image-product.jpg"}
        tit2="XX99 MARK I"
        pic3={process.env.PUBLIC_URL + "cart/xx59.jpg"}
        tit3="XX59"
        val1="2x"
        box1="Speaker Unit"
        val2="2x"
        box2="Speaker Cloth Panel"
        val3="1x"
        box3="User Manual"
        val4="1x"
        box4="3.5mm 10m Audio Cable"
        val5="1x"
        box5="10m Optical Cable"
      />
    </div>
  );
}

export default Speaker1;
