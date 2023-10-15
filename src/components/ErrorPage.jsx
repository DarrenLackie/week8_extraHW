import React from "react"
import styled from 'styled-components'

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    margin-top: 20px;
    font-size: 48px
`;

const ErrorPage = () => {
    return ( 
        <ErrorMessage>404 - PAGE NOT FOUND</ErrorMessage>
    )
}

export default ErrorPage