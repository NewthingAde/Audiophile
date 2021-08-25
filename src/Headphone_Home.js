import React from "react";
import "./Headphone_Home.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Headphone_Home() {
  return (
    <div>
      <div className="container second mt-5">
        <div className="row  row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-4">
            <Link to="/headphones">
              <div className="card backgound text-black h-100">
                <img
                  src={process.env.PUBLIC_URL + "cart/headphone1.png"}
                  className="card-img-top img1"
                  alt="..."
                />

                <div className="d-inline text-center pb-4">
                  <h5 className="text-center">
                    <b>HEADPHONES</b>
                  </h5>
                  <p className="text-center d-inline">SHOP</p>
                  <p className="d-inline text-danger">
                    <ArrowForwardIosIcon />
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/speakers">
              <div className="card backgound h-100 text-black">
                <img
                  src={process.env.PUBLIC_URL + "cart/speaker.png"}
                  className="card-img-top img2"
                  alt="..."
                />
                <div className="d-inline text-center">
                  <h5 className="text-center">
                    <b>SPEAKERS</b>
                  </h5>
                  <p className="text-center d-inline">SHOP</p>
                  <p className="d-inline text-danger">
                    <ArrowForwardIosIcon />
                  </p>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/earphones">
              <div className="card backgound text-black h-100">
                <img
                  src={process.env.PUBLIC_URL + "cart/earphone.png"}
                  className="card-img-top img3"
                  alt="..."
                />

                <div className="d-inline text-center mt-2">
                  <h5 className="text-center">
                    <b>EARPHONES</b>
                  </h5>
                  <p className="text-center d-inline">SHOP</p>
                  <p className="d-inline text-danger">
                    <ArrowForwardIosIcon />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
