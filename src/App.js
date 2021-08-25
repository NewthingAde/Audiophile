import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import Navbars from './Navbars'
import Home from './Home'
import Footer from "./Footer";
import Headphones from './Headphones'
import Headphones1 from './Headphones1'
import Headphones2 from './Headphones2'
import Headphones3 from './Headphones3'
import Speakers from './Speakers';
import Speaker1 from './Speaker1';
import Speaker2 from './Speaker2';
import Earphones from './Earphones';
import Earphone1 from './Earphone1';
import Checkout from './Checkout';
import Checkout1 from './Checkout1';
import CheckoutProduct from './CheckoutProduct';
import Payment from './Payment';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbars/>
    
     <Switch>
          <Route path="/payment">
          <Payment/>
          </Route>
          <Route path="/checkout">
          <Checkout/>
          </Route>
          <Route path="/headphones3">
          <Headphones3/>
          </Route>
          <Route path="/headphones2">
          <Headphones2/>
          </Route>
          <Route path="/headphones1">
          <Headphones1/>
          </Route>
          <Route path="/headphones">
          <Headphones/>
          </Route>
          <Route path="/speaker2">
          <Speaker2/>
          </Route>
          <Route path="/speaker1">
          <Speaker1/>
          </Route>
          <Route path="/speakers">
          <Speakers/>
          </Route>
          <Route path="/earphone1">
          <Earphone1/>
          </Route>
          <Route path="/earphones">
          <Earphones/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;



      
