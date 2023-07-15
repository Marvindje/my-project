import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Our Store!</h1>
      <SearchBar />
      <ProductCategories />
      <Link to="/products">Shop Now</Link>
    </div>
  );
};

export default Homepage;
