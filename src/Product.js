import React from "react";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Headphone_Home from "./Headphone_Home";

import AudioGear from "./AudioGear";
import YouMayAlsoLike from "./YouMayAlsoLike";

function Product({
  id,
  title,
  title1,
  title2,
  title3,
  image,
  picture,
  picture1,
  picture2,
  price,
  tit1,
  tit2,
  tit3,
  pic1,
  pic2,
  pic3,
  val1,
  val2,
  val3,
  val4,
  val5,
  box1,
  box2,
  box3,
  box4,
  box5,
}) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        title1: title1,
        title2: title2,
        title3: title3,
        image: image,
        price: price,
        picture: picture,
        picture1: picture1,
        picture2: picture2,
      },
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="container">
      <div className="container page2">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="container">
              <img src={image} alt="logo" className="xx99" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-5">
              <p className="pt-5 mt-5 np"> NEW PRODUCT</p>
              <h1 className="mt-2 marks">{title}</h1>
              <p>{title1}</p>
              <p>
                {" "}
                <b>${price}</b>{" "}
              </p>
              {/* <form method="POST"> */}
              <button
                name="data"
                type="button"
                onClick={removeFromBasket}
                className=" d-inline mb-5 see_product3 btn rounded-0 text-black"
              >
                <p className="pe-3 d-inline">-</p> {basket?.length}{" "}
                <p className="ps-3 d-inline">+</p>
              </button>
              <button
                name="data"
                type="button"
                onClick={addToBasket}
                className="d-inline mb-5 ms-3 see_product btn rounded-0 text-white"
              >
                ADD To CART
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row container page2">
        <div className="col-md-8">
          <h1>FEATURES</h1>
          <p> {title2}</p>
          <p> {title3}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h1>IN THE BOX</h1>
          <p>
            {" "}
            <span className="in_box pe-3">{val1}</span>
            {box1}
          </p>
          <p>
            {" "}
            <span className="in_box pe-3">{val2}</span>
            {box2}
          </p>
          <p>
            {" "}
            <span className="in_box pe-3">{val3}</span>
            {box3}
          </p>
          <p>
            {" "}
            <span className="in_box pe-3">{val4}</span>
            {box4}
          </p>
          <p>
            {" "}
            <span className="in_box pe-3">{val5}</span>
            {box5}
          </p>
        </div>
      </div>
      <div className="row container mt-5">
        {/* <div className="col-md-0 "></div> */}
        <div className="col-md-5">
          <img src={picture} alt="logo" className="gallery1" />

          <div className="row mt-3 g-3">
            <div className="col-md-12">
              <img src={picture1} alt="logo" className="gallery1" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img src={picture2} alt="logo" className="gallery2" />
        </div>
      </div>
      <div className="container mt-5 ">
        <h2 className="text-center my-3">YOU MAY ALSO LIKE</h2>
        <div className="row  row-cols-1 row-cols-md-3 g-4 page4">
          <div className="col-md-4">
            <div className="card backgound">
              <img
                src={pic1}
                // src={process.env.PUBLIC_URL + 'cart/image-xx99-mark-one-headphones.jpg'}
                className="card-img-top "
                alt="..."
              />
              <div className="text-center">
                <h4 className=" my-3">
                  <b>{tit1}</b>
                </h4>
                {/* <h4 className=' my-3'><b>XX99 MARK I</b></h4> */}
                <button className="mb-5 justify-content-center see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card backgound">
              <img
                src={pic2}
                // src={process.env.PUBLIC_URL + 'cart/image-xx59-headphones.jpg'}
                className="card-img-top"
                alt="..."
              />
              <div className="text-center">
                <h4 className=" my-3">
                  <b>{tit2}</b>
                </h4>
                {/* <h4 className=' my-3'><b>XX59</b></h4> */}
                <button className="mb-5 justify-content-center see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card backgound ">
              <img
                src={pic3}
                // src={process.env.PUBLIC_URL + 'cart/image-zx9-speaker.jpg'}
                className="card-img-top"
                alt="..."
              />
              <div className="text-center">
                <h4 className=" my-3">
                  <b>{tit3}</b>
                </h4>
                {/* <h4 className=' my-3'><b>ZX9 SPEAKER</b></h4> */}
                <button className="mb-5 justify-content-center see_product btn rounded-0 text-white">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page3">
        <Headphone_Home />
      </div>
      <AudioGear />
    </div>
  );
}

export default Product;
