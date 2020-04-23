import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'
import Cart from '../Cart/Cart';

import happyImage from '../../images/giphy.gif'

const Review = () => {

    const [cart,setCart]= useState([]);

   const [orderPlaced,setOrederPlaced]= useState(false)
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
            
            </div>
             <div className="cart-container">
             <Cart cart={cart}> 
             <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
       
             </Cart>
          </div>

        </div>
    );
};

export default Review;