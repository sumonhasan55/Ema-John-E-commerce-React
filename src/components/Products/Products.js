import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [cart, setCart]=useState([]);
   const [products, setProducts] =useState([]);
   useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data=> setProducts(data))
   },[]);
   const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(product)
   }

    return (
        <div className='shop-container'>

            <div className="products">
                {
                    products.map(product=><Product product={product}
                        key={product.id}
                        handleAddtoCart={handleAddtoCart}

                    ></Product>)
                }

            </div>
            <div className="cart mt-3">
                <h5>Order Summary</h5>
                <p>Total Selected items:{cart.length}</p>

            </div>
            
        </div>
    );
};

export default Products;