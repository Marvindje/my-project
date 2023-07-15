import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', description: 'This is product 1.' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'This is product 2.' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'This is product 3.' },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
