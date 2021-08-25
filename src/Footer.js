import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="container-fluid bg-black">
      <div className="row">
        <div className="col-md-6 text-white pt-5">
          <div className="container ms-5 pb-5">
            <h1 className=""> audiophile</h1>
            <small>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team  <br /> of music lovers and sound specialists who are
              devoted to helping you get the  <br /> most out of personal audio. Come
              and visit our demo facility - we’re open 7  <br /> days a week.
            </small>
          </div>
          <p className='pb-3'><small className=" container ms-5">
            Copyright 2021. All Rights Reserved
          </small></p>
        </div>
        <div className="col-md-6 pt-5">
            <div className='container'>
            <div className=' text-white float-end'>
            <Link to="/"><p className='d-inline me-5 text-white'><b>HOME</b></p></Link>
            <Link to="/headphones"> <p className='d-inline me-5 text-white'><b>HEADPHONES</b></p></Link>
            <Link to="/speakers"> <p className='d-inline me-5 text-white'><b>SPEAKERS</b></p></Link>
            <Link to="/earphones"> <p className='d-inline me-5 text-white'><b>EARPHONES</b></p></Link>
            </div>
            <div className= 'text-white me-5 float-end pt-5 mt-5'>
               <FacebookIcon className='me-3'/>
               <TwitterIcon className='me-3'/>
               <InstagramIcon className=''/>
           </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
