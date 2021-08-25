import React from "react";
import "./AudioGear.css";

function AudioGear() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 text-black">
            <div className="container">
              <h1 className="mt-5 pt-5">
                BRINGING YOU THE <br /> <span className="best"> BEST</span>{" "}
                AUDIO GEAR
              </h1>
              <small className="mt-5">
                Located at the heart of New York City, Audiophile is the premier{" "}
                <br />
                store for high end headphones, earphones, speakers, and audio{" "}
                <br />
                accessories. We have a large showroom and luxury <br />{" "}
                demonstration rooms available for you to browse and <br />{" "}
                experience a wide range of our products. Stop by our store to{" "}
                <br /> meet some of the fantastic people who make Audiophile the{" "}
                <br /> best place to buy your portable audio equipment.
              </small>
            </div>
          </div>
          <div className="col-md-6 bg_image">
            <img
              src={process.env.PUBLIC_URL + "cart/image-best-gear.jpg"}
              alt="logo"
              className="audiogear rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioGear;
