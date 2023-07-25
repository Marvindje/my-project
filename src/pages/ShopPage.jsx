import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/whitebackground/shutterstock_1420333637.jpg';
import  articles  from '../data/articles.js'; 

const ShopPage = () => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-cover p-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {articles.map(article => (
        <motion.div 
          key={article.id}
          className="rounded overflow-hidden shadow-lg bg-white"
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-auto object-cover" src={article.image} alt={article.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{article.name}</div>
            <p className="text-gray-800 text-lg">{article.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">${article.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShopPage;
