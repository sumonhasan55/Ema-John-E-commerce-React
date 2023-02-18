import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <div className="cart-container mt-3">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Products;