import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Checkout1 from "./Checkout1";
import "./Headphones.css";
import { PaystackButton } from "react-paystack";
import CheckoutProduct from "./CheckoutProduct";
import Total from "./Total";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const publicKey = "pk_test_919a95ed00b893bde1d746f7dd3db8264425ef0f";

  let amount = 100000;
  //  [(item =>(
  //     <CheckoutProduct
  //     price={item.price}
  //     />
  //     ))]
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setAddress] = useState("");
  const [address, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      number,
      address,
      country,
      city,
      zip,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div>
      <div className="container checkout ">
        <Link to="/">
          <p className="mt-5 ps-4 mb-3 pt-5 text-dark">Go Back</p>
        </Link>

        <div className=" container row  pb-5 g-5">
          {/* Section for first column */}

          <div className="col-md-7 border bg-white ">
            <div className="row g-3">
              <div className="pt-5">
                <h2>CHECKOUT</h2>
              </div>
              <p className="in_box">BILLING DETAILS</p>
              <div className="col-md-6">
                <label for="Name" className="form-label">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Alexei Ward"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="invalid-feedback">Valid Name is required.</div>
              </div>

              <div className="col-md-6">
                <label for="Email" className="form-label">
                  <b>Email Address</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="alexei@mail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">Valid email is required.</div>
              </div>

              <div className="col-md-6">
                <label for="Number" className="form-label">
                  <b>Phone Number</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="email"
                  placeholder="+1 202-555-0136"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="invalid-feedback">
                  Valid Phone number is required.
                </div>
              </div>
            </div>

            {/* Shipping Address Details  */}

            <div className="row g-3 pt-5 pb-5">
              <p className="in_box pb-0">SHIPPING INFO</p>
              <div className="col-12">
                <label for="Address" className="form-label">
                  <b>Address</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="1137 Williams Avenue"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="invalid-feedback">
                  Valid Address is required.
                </div>
              </div>

              <div className="col-md-6">
                <label for="Zip" className="form-label">
                  <b>Zip Code</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  placeholder="10001"
                  required
                  onChange={(e) => setZip(e.target.value)}
                />
                <div className="invalid-feedback">
                  Valid Zip code is required.
                </div>
              </div>

              <div className="col-md-6">
                <label for="city" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="New York"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
                <div className="invalid-feedback">Valid City is required.</div>
              </div>
              <div className="col-md-6">
                <label for="country" className="form-label">
                  <b>Country</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="United State"
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
                <div className="invalid-feedback">
                  Valid Country is required.
                </div>
              </div>
            </div>

            {/* Section for Payment Options */}

            {/* <div className="row g-3 py-5">
              <p className="in_box">PAYMENT INFO</p>
              <div className="col-md-6">
                <p>
                  <b>Payment Method</b>
                </p>
              </div>
              <div className="col-md-6">
                <div className="my-3">
                  <div className="form-check my-3">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                      required
                    />
                    <label className="form-check-label" for="credit">
                      <b>e-Money</b>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="debit">
                      <b>Cash on Delivery</b>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <label for="e-Money Number" className="form-label">
                  <b>e-Money Number</b>
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="e-money"
                  placeholder="238521993"
                  required
                />
                <div className="invalid-feedback">
                  Valid E-Money Number required is required.
                </div>
              </div>
              <div className="col-md-6">
                <label for="e-money Pin" className="form-label">
                  <b>e-Money Pin</b>
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="e-money"
                  placeholder="6891"
                  required
                />
                <div className="invalid-feedback">
                  Valid E-Money Pin required is required.
                </div>
              </div>
            </div> */}
          </div>

          {/*  This is section for the second column */}

          <div className="col-md-5 mx-4 summary border bg-white pt-5 ">
            {/* <Checkout1/>                    */}

            <div>
              <p>
                <b>SUMMARY</b>
              </p>
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
              <Total />
            </div>
            {/* <Link to="/payment">   */}
            {/* <button {...componentProps} className="continue_pay btn rounded-0 mt-3 text-white"> PAY</button>  */}
            {/* </Link> */}
            <PaystackButton
              className="continue_pay btn rounded-0 mt-3 text-white"
              {...componentProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// <div className="container">
// <div className="item">
// <img />
// <div className="item-details">
//     <p>Dancing Shoes</p>
//     <p>{amount}</p>
// </div>
// </div>
// <div className="checkout-form">
// <form>
//     <label>Name</label>
//     <input
//     type="text"
//     id="name"
//     onChange={(e) => setName(e.target.value)}
//     />
//     <label>Email</label>
//     <input
//     type="text"
//     id="email"
//     onChange={(e) => setEmail(e.target.value)}
//     />
//     <label>Phone</label>
//     <input
//     type="text"
//     id="phone"
//     onChange={(e) => setPhone(e.target.value)}
//     />
// </form>
// <PaystackButton {...componentProps} />
// </div>
// </div>
