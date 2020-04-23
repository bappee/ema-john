import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    //console.log(props);

    const {name,quantity,price,img,key}= props.product;
   
    return (
        
        <div className="review-items">
            <img src={img} alt=""/>
            
            <h4 className=" product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <p><small> $ {price}</small></p>
            <button className="main-button"
         onClick={()=>props.removeProduct(key)}
         >Remove</button>
        </div>
    );
};

export default ReviewItems;