import styled from 'styled-components';

export const HomeContainer = styled.div`
    text-align: center;
    padding: 20px;
`;

export const StoreName = styled.h1`
    font-size: 32px;
    color: #333;
`;

export const SubTitle = styled.h3`
    font-size: 22px;
    color: #333;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #999;
`;

const Home = () => (
    <HomeContainer>
        <StoreName>Darren's Fancy Pants Tech Store</StoreName>
        <SubTitle>We have everything you'll ever need</SubTitle>
        <Description>(*if you only need 1 of 3 things)</Description>
    </HomeContainer>
);

export default Home