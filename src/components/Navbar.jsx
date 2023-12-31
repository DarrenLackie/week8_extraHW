import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

export const NavBarContainer = styled.nav`
    background-color: blue;
    color: white;
    padding: 10px;
`;

export const NavList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
`;

export const NavItem = styled.li`
    margin: 0;
    color: white;
    font-size: 26px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: helvetica;

    &:hover {
    text-decoration: underline;
    }
`

const NavBar = () => {
    return ( 
        <NavBarContainer>
            <NavList>
                <NavItem>
                    <StyledLink to="/">Home</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/products">Products</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/basket">Basket</StyledLink>
                </NavItem>
            </NavList>
        </NavBarContainer>
    );
}

export default NavBar