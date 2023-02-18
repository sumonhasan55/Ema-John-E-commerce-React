import React from 'react';

const Cart = (props) => {
   const{cart} =props
    return (
        <div>
             <h5>Order Summary</h5>
                <p>Total Selected items:{cart.length}</p>

            
        </div>
    );
};

export default Cart;