import React from 'react';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import "./style.css";

faker.seed(100);

const Home = (cart,setCart) => {

    const productsArray=[...Array(20)].map(()=>
    ({
      userId: faker.string.uuid(),
       name:faker.commerce.productName(),
       price: faker.commerce.price(),
        avatar: faker.image.avatar(),
    }));

    
    const [products] = useState(productsArray);

console.log(cart);

  return (
    <div className="productConatiner">
        {products.map((prod)=>(
            <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
        ))}</div>
    );
};

export default Home