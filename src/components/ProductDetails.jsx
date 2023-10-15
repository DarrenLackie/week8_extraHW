import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const DetailContainer = styled.div`
    padding: 20px;
`;

const ProductDetails = ({ products }) => {
    const { productID } = useParams()

    const product = products.find((product) => product.id === parseInt(productID))

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <DetailContainer>
            <h1>{product.name}</h1>
            <p>Price: £{product.price}</p>
        </DetailContainer>
    );
}

export default ProductDetails
