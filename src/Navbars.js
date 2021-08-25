import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import "./Navbars.css";
import Product from "./Product";
import ModalCheckout from "./ModalCheckout";

function Navbars() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <nav className="  navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link to="/">
            {" "}
            <h1 className="text-white">audiophile</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  {" "}
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/headphones">
                  {" "}
                  <a className="nav-link text-white" href="#">
                    HEADPHONES
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/speakers">
                  {" "}
                  <a className="nav-link text-white" href="#">
                    SPEAKERS
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/earphones">
                  {" "}
                  <a className="nav-link text-white" href="#">
                    EARPHONES
                  </a>
                </Link>
              </li>
            </ul>

            <form
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className=" text-white"
            >
              <ModalCheckout />
              <AddShoppingCartIcon className="d-inline" />
              <span className=" text-white d-inline">{basket?.length}</span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
