import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddtoCart,product}=props;
    const{name,img,price,id,ratings,category}=props.product;
    
    return (
        <div className='product-container'>
            <div className="">
            <img src={img ? img : img}alt="" />
            <h6>{name}</h6>
            
            <p>Price:${price}</p>
            <p>Rating:{ratings}</p>
            <p>Category:{category}</p>
            </div>

            <button className='btn-cart'onClick= {()=> handleAddtoCart(product)} >
               <p className=''>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p> 
            </button>

            
        </div>
    );
};

export default Product;