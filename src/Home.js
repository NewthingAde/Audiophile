import React from "react";
import "./Home.css";
import Headphone_Home from "./Headphone_Home";
import Footer from "./Footer";
import Headphones1 from "./Headphones1";
import AudioGear from "./AudioGear";
import {useStateValue} from "./StateProvider"
import {Link} from "react-router-dom";

function Home() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className=''>
     <div className='border-top text-center container w-auto d-block'></div>
      <div className=" home_product container-fluid">
        <div className="row">
          <div className="col-md-6 text-white bg-black">
            <div className="container">
              <p className="pt-5 mt-5 ps-5 np"> NEW PRODUCT</p>
              <h1 className="mt-5 marks ps-5">
                XX99 MARK II HEADPHONES
              </h1>
              <p className="exp mt-5 ps-5">
                {" "}
                Experience natural, lifelike audio and exceptional <br /> build
                quality made for the passionate music <br /> enthusiast.
              </p>
              <Link to='/headphones1'> <button className="see_product2 ms-5 mb-5 see_product btn rounded-0 text-white">
                {" "}
                See Product
              </button> </Link>
            </div>
          </div>
          <div className="col-md-6 bg_image">
            {/* <img src={process.env.PUBLIC_URL + 'cart/headphone.png'} alt="logo" className='bg-black' width='600px'/> */}
          </div>
        </div>
      </div>
      {/* <div className='container'>
            <div className="row mt-5 g-4">
                <div className='col-md-4'>
                <img src={process.env.PUBLIC_URL + 'cart/image2.jpg'} alt="logo"/>
                </div>
                <div className='col-md-4'>
                <img src={process.env.PUBLIC_URL + 'cart/image2.jpg'} alt="logo"/>
                </div>
                <div className='col-md-4'>
                <img src={process.env.PUBLIC_URL + 'cart/image2.jpg'} alt="logo"/>
                </div>
            </div>
            </div> */}

      <div>
        <Headphone_Home />
      </div>

      {/* section for the ZX9 SPEAKER  */}

      <div className="container ZX9">
        <div className="row">
          <div className="col-md-6 text-white">
            <img
              src={process.env.PUBLIC_URL + "cart/speaker.png"}
              className="card-img-top imgs1"
              alt="..."
            />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <div className="container text-white">
              <h1 className="marks">ZX9 </h1>
              <h1 className="marks"> SPEAKER </h1>
              <p className=" ">
                {" "}
                Upgrade to premium speakers that are <br /> phenomenally built
                to deliver truly remarkable <br /> sound.
              </p>
              <Link to='/speaker1'>  <button className=" see_product2 mb-5 btn-black btn rounded-0 text-white">
                {" "}
                See Product
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
      {/* Section for ZX7 SPEAKER */}

      <div className="zx7 container-fluid mt-5">
        <div className="text-black bg_image2">
          <div className="col-md-4 ms-5 mt-5 pt-5 text-center">
            <h3 className="mt-5">ZX7 SPEAKER</h3>
            <Link to='/speaker2'>  <button className="see_product2 btn-outline-dark btn rounded-0 text-black">
              {" "}
              See Product
            </button> </Link> 
          </div>
        </div>
      </div>

      {/* section for YZ1 EARPHONE */}

      <div className="container mt-5">
        <div className="row  row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-6">
            <div className="h-100">
              <img
                src={process.env.PUBLIC_URL + "cart/image-earphones.jpg"}
                className="card-img-top ear_phone"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6 ear_phone2">
            <div className=" text-start h-100">
              <h5 className="">
                <b>YX1 EARPHONES</b>
              </h5>
              <Link to='/earphone1'>   <button className="see_product2 btn btn-outline-dark rounded-0 text-black">
                {" "}
                See Product
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
      {/* Section for AudioGear and Footer */}
      <AudioGear/>
    </div>
  );
}

export default Home;
