import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const{cart} =props;
   //console.log(cart)
   let total = 0;
   let shipping = 0;
   let quantity = 0;
   
   for(const product of cart){
    total = total+ product.price * product.quantity;
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping * product.quantity;


   }
   const tax = parseFloat((total * 0.1).toFixed(2)) ;
   const grandTotal = total + shipping + tax;

    return (
        <div className='cart-container'>
             <h5>Order Summary</h5>
                <p>Total Selected item:{quantity}</p>
                <p>Total Price:${total}</p>
                <p>Total Shiping Charge:${shipping}</p>
                <p>Tax:${tax}</p>
                <h5>Grand Total:${grandTotal}</h5>
               <div className="">
               
               <button type="button" className="btn btn-warning w-100 mt-5">Clear Cart</button>
               </div>
               <div className="">
               <button type="button" className="btn btn-info mt-3 w-100">Order Review</button>
               
               </div>
                
            
        </div>
    );
};

export default Cart;