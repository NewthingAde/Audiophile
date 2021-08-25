import React from 'react'
import { useStateValue } from './StateProvider';
import "./Headphones.css";
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
import Total from './Total';

function Checkout1() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            
            <div>
            <p><b>SUMMARY</b></p>
                {basket.map(item =>(
                  <CheckoutProduct 
                  id={item.id}  
                  title={item.title}  
                  image={item.image}  
                  price={item.price}    
                />
                ))}
            </div>
            <div className="">
                <Total/>
            </div> 
            <Link to="/payment">  <button className="continue_pay btn rounded-0 mt-3 text-white"> CONTINUE & PAY</button> </Link>
        </div>
    )
}

export default Checkout1
