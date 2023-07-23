import React from 'react';
import { Link } from 'react-router-dom';

const HeroHeader = () => {
  return (
    <header className="bg-blue-500 text-white text-center p-5">
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans My Closet</h1>
      <p className="text-xl mb-4">Découvrez nos dernières collections pour hommes, femmes et accessoires.</p>
      <Link to="/products" className="bg-white text-blue-500 px-4 py-2 rounded font-bold">Voir les produits</Link>
    </header>
  );
};

export default HeroHeader;
