import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles.js'; 

const ProductDetailsPage = () => {
  const [currentProduct, setCurrentProduct] = useState({})
  const { id } = useParams();
  
  useEffect(() => {
    if(id){
      const findProduct = articles.find(product => product.id === id); // Utilisez les données de images.js au lieu de l'API faker
      setCurrentProduct(findProduct)
    }
  }, [id])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      {currentProduct && (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">{currentProduct.name}</h3>
          <img className="w-full h-64 object-cover mb-4" src={currentProduct.image} alt={currentProduct.name} />
          <p className="text-gray-700 mb-2">Category: {currentProduct.type}</p> {/* Ici, j'ai supposé que le type est la catégorie */}
          <p className="text-lg font-bold mb-2">Price: {currentProduct.price}</p>
          <p className="text-gray-700 mb-2">Description: {currentProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
