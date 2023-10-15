import React from 'react'
import styled from 'styled-components'

const BasketContainer = styled.div`
    background-color: #f9f9f9;
    padding: 10px;
`;

const BasketItem = styled.div`
    margin: 10px 0;
`;

const Total = styled.p`
    font-weight: bold;
    margin-top: 10px;
`;


const Basket = ({ basket }) => {

    const total = basket.reduce((acc, product) => acc + product.price, 0)

    return (
        <div>
            <h1>Your Basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
            <div>
                <ul>
                    {basket.map((product, index) => (
                    <li key={index}>{product.name} - £{product.price}</li>
                ))}
                </ul>
                <p>Total: £{total}</p>
            </div>
            )}
        </div>
    );
};

export default Basket