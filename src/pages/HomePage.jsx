import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/whitebackground/shutterstock_1420333637.jpg';

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {products.map(product => (
        <motion.div 
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Homepage;
