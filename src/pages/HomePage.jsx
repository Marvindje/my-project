import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <SearchBar />
      <ProductCategories />
      <Link to="/products" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Shop Now</Link>
    </div>
  );
};

export default Homepage;
