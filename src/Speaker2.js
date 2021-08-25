import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Speaker2() {
  return (
    <div>
      <div className="container">
        <Link to="/speakers">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/image-zx7.jpg"}
        title="ZX7 SPEAKER"
        title1="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        title2="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
        title3="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        price={3500}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-13.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-14.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-15.jpg"}
        pic1={process.env.PUBLIC_URL + "cart/image-zx9.jpg"}
        tit1="ZX9 SPEAKER"
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
        box5="7.5m Optical Cable"
      />
    </div>
  );
}

export default Speaker2;
