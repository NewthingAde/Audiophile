import React from "react";
import Total2 from "./Total2";
import { Link } from "react-router-dom";
import "./Headphones.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function ModalCheckout({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
      id: id,
    });
  };
  return (
    <div className="modal__checkout">
      {/* Name */}

      {/* <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade text-black cart"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div className="d-inline container my-3">
                <small className="d-inline">
                  {" "}
                  <b>CART ({basket.length}) </b>
                </small>
                <small className="d-inline float-end" onClick={emptyBasket}>
                  Removeall
                </small>
              </div>
            </div>
            <div class="modal-body">
              <div>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="">
                <Total2 />

                <Link to="/checkout">
                  {" "}
                  <button className=" w-100 checkout_button btn rounded-0 mt-3 text-white">
                    {" "}
                    CHECKOUT
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*       
      <div
        className="modal fade text-black cart "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="d-inline container my-3">
              <small className="d-inline">
                {" "}
                <b>CART ({basket.length}) </b>
              </small>
              <small className="d-inline float-end" onClick={emptyBasket}>
                Removeall
              </small>
            </div>
            <div className="modal-body">
              <div>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="">
                <Total2 />
              </div>
              <Link to="/checkout">
                {" "}
                <button className=" w-100 checkout_button btn rounded-0 mt-3 text-white">
                  {" "}
                  CHECKOUT
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ModalCheckout;
