import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FAKE_PRODUCTS } from "../../fake_api/products"

const ProductDetailsPage = ({
  product,
}) => {
  const [currentProduct, setCurrentProduct] = useState({})
  const { id } = useParams();
  
  useEffect(() => {
    if(id){
      const findProduct = FAKE_PRODUCTS.find(product => product.id === id);
      setCurrentProduct(findProduct)
    }
  }, [id])

  return (
    <div>
      <h2>Product Details</h2>
    </div>
  );
};

export default ProductDetailsPage;
