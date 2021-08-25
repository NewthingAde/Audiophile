import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Headphones.css";
import Product from "./Product";

function Headphones1() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="headphones1">
      <div className="container">
        <Link to="/headphones">
          {" "}
          <p className="mt-5 ps-4 mb-3 text-dark">Go Back</p>{" "}
        </Link>
      </div>

      <Product
        image={process.env.PUBLIC_URL + "cart/image9.jpg"}
        title="XX99 MARK II HEADPHONES"
        title1=" The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound."
        title2=" Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat."
        title3="The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic."
        price={2999}
        picture={process.env.PUBLIC_URL + "cart/image-gallery-1.jpg"}
        picture1={process.env.PUBLIC_URL + "cart/image-gallery-2.jpg"}
        picture2={process.env.PUBLIC_URL + "cart/image-gallery-3.jpg"}
        pic1={
          process.env.PUBLIC_URL + "cart/image-xx99-mark-one-headphones.jpg"
        }
        tit1="XX99 MARK I"
        pic2={process.env.PUBLIC_URL + "cart/image-xx59-headphones.jpg"}
        tit2="XX59"
        pic3={process.env.PUBLIC_URL + "cart/image-zx9-speaker.jpg"}
        tit3="ZX9 SPEAKER"
        val1="1x"
        box1="Headphone Unit"
        val2="2x"
        box2="Replacement Earcups"
        val3="1x"
        box3="User Manual"
        val4="1x"
        box4="3.5mm 5m Audio Cable"
        val5="1x"
        box5="Travel Bag"
      />
      {/* <div className="container">
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
                <p> <b>$ 2,999</b> </p>
                <form>
                  <button className="mb-5 see_product3 btn rounded-0 text-black">
                    1
                  </button>
                  <button className="mb-5 ms-3 see_product btn rounded-0 text-white">
                    ADD To CART
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      <div className="row container page3">
      <div className="col-md-8">
          <h1>FEATURES</h1>
          
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver <br/> superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls <br/> designed for any
            situation. Whether you’re taking a business call or just in your own
            personal <br/> space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br/> <br/>
          
          The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h1>IN THE BOX</h1>
          <p> <span className='in_box pe-3'>1x</span>Headphone Unit</p>
          <p> <span className='in_box pe-3'>2x</span>Replacement Earcups</p>
          <p> <span className='in_box pe-3'>1x</span>User Manual</p>
          <p> <span className='in_box pe-3'>1x</span>3.5mm 5m Audio Cable</p>
          <p> <span className='in_box pe-3'>1x</span>Travel Bag</p>
        </div>
      </div>
    </div> */}

      {/* Section for headphone images */}
      {/* <div className="row container g-3 mt-5">
          <div className="col-md-2 "></div>
            <div className="col-md-5">
            <img
                  src={process.env.PUBLIC_URL + "cart/image-gallery-1.jpg"}
                  alt="logo"
                  className="gallery1"
                />
  
             <div className='row mt-3 g-3'> 
             <div className='col-md-12'>
             <img
                  src={process.env.PUBLIC_URL + "cart/image-gallery-2.jpg"}
                  alt="logo"
                  className="gallery1"
                />
             </div>
             </div>
            </div>

            <div className="col-md-5">
            <img
                  src={process.env.PUBLIC_URL + "cart/image-gallery-3.jpg"}
                  alt="logo"
                  className="gallery2"
                />
          </div>
    </div> */}

      {/* Section for AudioGear and Footer */}
      {/* <div className='page3'><Headphone_Home/></div>
        <AudioGear/>
        <Footer/>  */}
    </div>
  );
}

export default Headphones1;
