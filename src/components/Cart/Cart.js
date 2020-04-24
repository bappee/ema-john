import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart
    console.log(props)

   let total =0;
   for(let i=0; i<cart.length; i++){
       const product=cart[i];
       total= total+product.price* product.quantity ;

   }
 
     let shipping=0;
     if(total>35){
         shipping=0;
     }
     else if (total>15){
         shipping=4.50;
     }
     else if (total>0)
      shipping =12.99;
    
  
     const tax= total/10;

     const formateNumber= num=> {
         const precision=num.toFixed(2);
         return Number(precision);
     }

    return (
        <div className="text-design">
                <h3>Order Summary</h3>
               <p className="items-design">Items Ordered:{cart.length}</p>
               <p><b>Items Cost: $</b>{formateNumber(total)}</p>
               <p>Shipping Cost: ${formateNumber(shipping)}</p>
                <p>Tax: ${ formateNumber(tax)}</p>
                <p>Total Price: ${formateNumber(total+shipping+tax)}</p>
               {
                   props.children
               }
        </div>
    );
};

export default Cart;