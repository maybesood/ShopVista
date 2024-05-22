// App.js
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { popularProducts } from './data';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart cartItems={cart} deleteFromCart={deleteFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail products={popularProducts} addToCart={addToCart} deleteFromCart={deleteFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
