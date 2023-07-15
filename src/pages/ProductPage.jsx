import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
];

const ProductPage = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <SearchBar />
      <ProductCategories />
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

