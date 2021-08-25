import React from "react";
import "./Headphones.css";
import { useStateValue } from "./StateProvider";

function YouMayAlsoLike(tit1, tit2, tit3, pic1, pic2, pic3) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        tit1: tit1,
        tit2: tit2,
        tit2: tit2,
        pic1: pic1,
        pic1: pic1,
        pic1: pic1,
      },
    });
  };
  return (
    <div>
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
    </div>
  );
}

export default YouMayAlsoLike;
