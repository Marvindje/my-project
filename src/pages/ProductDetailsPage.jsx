import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FAKE_PRODUCTS } from "../../fake_api/products"

const ProductDetailsPage = () => {
  const [currentProduct, setCurrentProduct] = useState({})
  const { id } = useParams();
  
  useEffect(() => {
    if(id){
      const findProduct = FAKE_PRODUCTS.find(product => product.id === id);
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
          <p className="text-gray-700 mb-2">Category: {currentProduct.category}</p>
          <p className="text-gray-700 mb-2">Type: {currentProduct.type}</p>
          <p className="text-lg font-bold mb-2">Price: {currentProduct.price}</p>
          <p className="text-gray-700 mb-2">Description: {currentProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
