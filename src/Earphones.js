import React from "react";
import "./Headphones.css";
import Headphone_Home from "./Headphone_Home";
import Footer from "./Footer";
import AudioGear from "./AudioGear";
import { Link } from "react-router-dom";
import Product from "./Product";

function Earphones() {
  return (
    <div>
      <div className="border-top text-center container w-auto d-block"></div>
      <h1 className="text-center bg-black text-white p-5 mb-5">EARPHONES</h1>

      {/* SECTION FOR YX1 WIRELESS EARPHONES */}

      <div className="container page3">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/image-yx1-earphones.jpg"}
                alt="logo"
                className="xx99"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">YX1 WIRELESS EARPHONES</h1>
              <p>
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <Link to="/earphone1">
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section for AudioGear and Footer */}
      <div className="page2">
        <Headphone_Home />
      </div>
      <AudioGear />
    </div>
  );
}

export default Earphones;
