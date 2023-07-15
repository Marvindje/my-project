import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <SearchBar />
      <ProductCategories />
      {/* Display checkout form here */}
    </div>
  );
};

export default CheckoutPage;
