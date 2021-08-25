import React from "react";
import "./Headphones.css";
import Headphone_Home from "./Headphone_Home";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AudioGear from "./AudioGear";

function Speakers() {
  return (
    <div>
      <div className="border-top text-center container w-auto d-block"></div>
      <h1 className="text-center bg-black text-white p-5 mb-5">SPEAKERS</h1>

      {/* SECTION FOR ZX9 SPEAKER */}

      <div className="container page2">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/image-zx9.jpg"}
                alt="logo"
                className="xx99"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">
                ZX9 <br />
                SPEAKER
              </h1>
              <p>
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Link to="/speaker1">
                {" "}
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section for ZX7 SPEAKER */}

      <div className="container page3">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">
                ZX7 <br />
                SPEAKER
              </h1>
              <p>
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <Link to="/speaker2">
                {" "}
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/image-zx7.jpg"}
                alt="logo"
                className="xx99"
              />
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

export default Speakers;
