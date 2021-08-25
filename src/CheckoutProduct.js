import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";

function CheckoutProduct({ id, title, image, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="row g-0 mb-5 ">
        <div className="col-md-3">
          <img className=" reduce_image" src={image} />
        </div>

        <div className="col-md-9 mb-1">
          <small className="">
            <b>
              {title} <br />$ {price}
            </b>
          </small>
          <button
            name="data"
            type="button"
            onClick={removeFromBasket}
            className=" d-inline float-end see_product4 btn rounded-0 text-black"
          >
            <p className="pe-2 d-inline">-</p> {basket?.length}{" "}
            <p className="ps-2 d-inline">+</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
