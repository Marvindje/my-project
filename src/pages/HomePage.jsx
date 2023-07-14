import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/whitebackground/shutterstock_1420333637.jpg';

const Homepage = () => {
  return (
    <div className="flex flex-wrap justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div 
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
        whileHover={{ scale: 1.05 }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Welcome to Our Store!</div>
          <p className="text-gray-700 text-base">Explore our collection of products and find the perfect one for you.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
