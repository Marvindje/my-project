// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

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
    <div className="flex items-center justify-between p-5 bg-primary">
      <h1 className="text-2xl font-bold text-white">My closet</h1>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div 
          id="menu"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-200"
        >
          <div className="bg-white rounded p-5 w-full max-w-md mx-auto">
            <Link to="/" className={`block mb-2 text-primary ${isActive('/') ? 'font-bold' : ''}`}>Home</Link>
            <Link to="/accessories" className={`block mb-2 text-primary ${isActive('/accessories') ? 'font-bold' : ''}`}>Accessories</Link>
            <Link to="/info" className={`block mb-2 text-primary ${isActive('/info') ? 'font-bold' : ''}`}>Info</Link>
            <Link to="/shop" className={`block mb-2 text-primary ${isActive('/shop') ? 'font-bold' : ''}`}>Shop</Link>
          </div>
        </div>
      )}
    </div>
  );
};
