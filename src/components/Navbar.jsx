import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XIcon, TshirtIcon, CollectionIcon, BagIcon, BackpackIcon, HatIcon } from '@heroicons/react/outline';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClickOutside = (event) => {
    if (event.target.id === 'menu') {
      setIsOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500 w-full">
      <h1 className="text-2xl font-bold text-white">My closet</h1>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        }
      </button>
      {isOpen && (
        <div 
          id="menu"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-200"
        >
          <div className="bg-white rounded p-5 w-full max-w-md mx-auto">
            <div className="mb-2">
              <h2 className={`text-blue-500 ${isActive('/hommes') ? 'font-bold' : ''}`}>Hommes</h2>
              <Link to="/hommes/tshirts" className="block text-blue-500"><TshirtIcon className="h-5 w-5 inline-block mr-1" />Nos T-shirts</Link>
              <Link to="/hommes/chemises" className="block text-blue-500"><CollectionIcon className="h-5 w-5 inline-block mr-1" />Nos Chemises</Link>
            </div>
            <div className="mb-2">
              <h2 className={`text-blue-500 ${isActive('/femmes') ? 'font-bold' : ''}`}>Femmes</h2>
              <Link to="/femmes/tshirts" className="block text-blue-500"><TshirtIcon className="h-5 w-5 inline-block mr-1" />Nos T-shirts</Link>
              <Link to="/femmes/chemises" className="block text-blue-500"><CollectionIcon className="h-5 w-5 inline-block mr-1" />Nos Chemises</Link>
            </div>
            <div className="mb-2">
              <h2 className={`text-blue-500 ${isActive('/accessoires') ? 'font-bold' : ''}`}>Accessoires</h2>
              <Link to="/accessoires/sacsamain" className="block text-blue-500"><BagIcon className="h-5 w-5 inline-block mr-1" />Nos Sacs à Main</Link>
              <Link to="/accessoires/sacsados" className="block text-blue-500"><BackpackIcon className="h-5 w-5 inline-block mr-1" />Nos Sacs à Dos</Link>
              <Link to="/accessoires/casquettes" className="block text-blue-500"><HatIcon className="h-5 w-5 inline-block mr-1" />Casquettes et Bonnets</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
