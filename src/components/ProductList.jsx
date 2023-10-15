import React from 'react';
import Product from './Product';


const ProductList = ({ products }) => {

    return ( 
        <>
            <h1>Product List</h1>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </>
    );
}

export default ProductList;