import React from "react";
import { Link } from "react-router-dom";
import "./Headphones.css";
import Headphone_Home from "./Headphone_Home";
import Footer from "./Footer";
import AudioGear from "./AudioGear";

function Headphones() {
  return (
    <div>
      <div className="border-top text-center container w-auto d-block"></div>
      <h1 className="text-center bg-black text-white p-5 mb-5">HEADPHONES</h1>

      {/* SECTION FOR XX99 MARK II HEADPHONES */}

      <div className="container page2">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/image9.jpg"}
                alt="logo"
                className="xx99"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">XX99 MARK II HEADPHONES</h1>
              <p>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Link to="/headphones1">
                {" "}
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section for XX99 MARK I HEADPHONES */}

      <div className="container page2">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">XX99 MARK I HEADPHONES</h1>
              <p>
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <Link to="/headphones2">
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/xx99-mark-1.jpg"}
                alt="logo"
                className="xx99"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION FOR XX59 HEADPHONES */}

      <div className="container page3">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "cart/xx59.jpg"}
                alt="logo"
                className="xx99"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">
                XX59 <br /> HEADPHONES
              </h1>
              <p>
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <Link to="/headphones3">
                <button className="mb-5 see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section for the 3 set of headphones */}

      <div className="page3">
        <Headphone_Home />
      </div>

      {/* Section for AudioGear and Footer */}
      <AudioGear />
    </div>
  );
}

export default Headphones;
