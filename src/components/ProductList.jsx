import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: helvetica;
`;

const ProductListTitle = styled.h1`
    font-size: 24px;
    color: #333;
    font-family: helvetica;
    text-align: center;
`;

const ProductCard = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 300px;
    background-color: #f9f9f9;
`;

const ProductTitle = styled.h3`
    margin: 5px;
    text-align: center;
`;

const ProductPrice = styled.p`
    margin: 5px;
    text-align: center;
`;

const BasketButton = styled.button`
    background-color: #0077cc;
    color: white;
    border: none;
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #0055aa;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

const ProductList = ({ products, addProductToBasket }) => {

    const navigate = useNavigate()

    const navigateToProductDetail = (productId) => {
        navigate(`/products/${productId}`)
    }    

    return ( 
        <>
            <ProductListTitle>Product List</ProductListTitle>
            <ProductListContainer>
            {products.map((product, index) => (
                <ProductCard key={index}>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductPrice>Price: £{product.price}</ProductPrice>
                    <ButtonContainer>
                    <BasketButton onClick={() => addProductToBasket(product)}>Add to Basket</BasketButton>
                    <BasketButton onClick={() => navigateToProductDetail(product.id)}>View Details</BasketButton>
                    </ButtonContainer>
                </ProductCard>
            ))}
        </ProductListContainer>
        </>
    );
}

export default ProductList;
