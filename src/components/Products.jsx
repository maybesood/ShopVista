// Products.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from "../data";
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ color, sort }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let sortedProducts = [...popularProducts];

    // Filter by color if selected
    if (color && color !== "All") { // Check if color is not "All"
      sortedProducts = sortedProducts.filter(product => product.color === color);
    }

    // Sort based on selected option
    switch (sort) {
      case 'PriceAsc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'PriceDesc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      // Add more cases for other sorting options if needed
      default:
        // By default, sort by newest
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredProducts(sortedProducts);
  }, [color, sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
