import React from 'react';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';


const Home = () => {

    const productsArray=[...Array(20)].map(()=>
    ({
      userId: faker.string.uuid(),
       name:faker.commerce.productName(),
       price: faker.commerce.price(),
        avatar: faker.image.avatar(),
    }));
const [products] = useState(productsArray);
  return (
    <div className="productConatiner">
        {products.map((prod)=>(
            <SingleProduct prod={prod}/>
        ))}</div>
    );
};

export default Home