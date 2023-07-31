
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCategories from '../components/ProductCategories';
import ImageCarousel from '../components/ImageCarousel'; 

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="text-center text-gray-800">
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue !
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore notre collection de produits 
        </motion.p>
      </div>
      <ProductCategories className="mb-8" />
      <Link to="/products" className="inline-block mt-4 bg-white text-gray-700 px-6 py-3 rounded-full font-bold text-xl hover:bg-gray-700 hover:text-white transition-colors duration-300">Shop Now</Link>
      <Link to="/about" className="inline-block mt-4 bg-white text-gray-700 px-6 py-3 rounded-full font-bold text-xl hover:bg-gray-700 hover:text-white transition-colors duration-300">Learn More</Link>
      <ImageCarousel /> 
    </div>
  );
};

export default Homepage;
