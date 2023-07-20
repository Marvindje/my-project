import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';

const generateProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      image: 'https://via.placeholder.com/150',
    });
  }
  return products;
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(generateProducts(50)); // Génère 50 produits
  }, []);

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
