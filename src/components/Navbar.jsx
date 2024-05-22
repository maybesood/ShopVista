import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';


const Container = styled.div`
    height:60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding:5px;
`;

const Input = styled.input`
  border:none;
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 125px;
  text-decoration: none; 
  color:black;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            {/* <SearchContainer>
                <Input />
                <Search style={{color:"gray",fontSize:16}}/>
            </SearchContainer> */}
        </Left>
        <Center><Logo>SHOPVISTA</Logo></Center>
        <Right>
          
        <Link to="/Register">
          <MenuItem>REGISTER</MenuItem>
        </Link>

        <Link to="/Login">
            <MenuItem>LOGIN</MenuItem>
        </Link>
     
          

          <Link to="/cart">
          <MenuItem>
            CART
          </MenuItem>
        </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
