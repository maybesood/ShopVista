import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductDesc = styled.span``;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  background-color: red;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
`;

const PaymentButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
`;

const Cart = ({ cartItems, deleteFromCart }) => {
  const handlePayment = () => {
    // Redirect the user to the Stripe payment link
    window.location.href = 'https://buy.stripe.com/test_bIYg1X4ae32SfcY7ss';
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>Your Cart</Title>
        <Info>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <Product key={index}>
                  <ProductDetail>
                    <Image src={item.img} alt={item.title} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.title}
                      </ProductName>
                      <ProductDesc>{item.desc}</ProductDesc>
                    </Details>
                  </ProductDetail>
                  <ProductPrice>${item.price}</ProductPrice>
                  <DeleteButton onClick={() => deleteFromCart(item.id)}>Delete</DeleteButton>
                </Product>
              ))}
              <PaymentButton onClick={() => handlePayment()}>Pay Now</PaymentButton>
            </>
          )}
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Cart;
