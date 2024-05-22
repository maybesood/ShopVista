import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import Product from '../components/Product';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSort, setSelectedSort] = useState('Newest'); // State for sorting

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      {/* <Title>Dresses</Title> */}
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleColorChange}>
            <Option disabled selected>
              Color
            </Option>
            <Option value="">All</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Green">Green</Option>
            <Option value="Cream">Cream</Option>
            <Option value="Colorblocked">Colorblocked</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSortChange}> {/* Call handleSortChange on change */}
            <Option value="Newest">Newest</Option>
            <Option value="PriceAsc">Price (asc)</Option>
            <Option value="PriceDesc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products color={selectedColor} sort={selectedSort} />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
