import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Button } from '@mui/material';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.title} /> 
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
