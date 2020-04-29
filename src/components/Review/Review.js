import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'
import Cart from '../Cart/Cart';

import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {

    const [cart,setCart]= useState([]);
    const [orderPlaced,setOrederPlaced]= useState(false)

    //for change button by loginwise
    const auth= useAuth();

    const handlePlaceOrder=()=>{
       
        setOrederPlaced(true);
       processOrder( setCart([]))
    }

    const removeProduct=(productKey)=>{
        
        const newCart= cart.filter(pd=>pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }


    useEffect (()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        
        const cartProducts = productKeys.map(key=> {
            const product= fakeData.find(pd=> pd.key === key);
            product.quantity = savedCart[key];
            return product; 
       


    })
    

    setCart(cartProducts);

        },[]);
        
      let Thankyou;
      if(orderPlaced){
          Thankyou= <img src={happyImage} alt=""/>
      }


    return (
    

        <div className="twin-container">

          <div className= 'product-container'> 
           {
                cart.map(pd=> <ReviewItems  
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewItems>)
            }
            {
                Thankyou
            }

            {
                !cart.length && <h1>Your Cart is empty.Please <a href="/">Shop more</a> </h1>
            }
            
            </div>
             <div className="cart-container">
             <Cart cart={cart}> 
            <Link to ="/shipment"> 
            {
                auth.user ?  <button  className="main-btn">Proceed checkout</button>
                :  <button className="main-btn">Login To Shipment</button>
       
            }
                </Link>
             </Cart>
          </div>

        </div>
    );
};

export default Review;