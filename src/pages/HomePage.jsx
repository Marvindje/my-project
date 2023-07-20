import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const Homepage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Store!</h1>
      <SearchBar />
      <ProductCategories />
      <Link to="/products" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Shop Now</Link>
    </div>
  );
};

export default Homepage;
