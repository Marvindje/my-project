import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.id === 'menu') {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-5 bg-blue-500">
      <h1 className="text-2xl font-bold text-white">My closet</h1>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
      >
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>
      {isOpen && (
        <div 
          id="menu"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded p-5 w-full max-w-md mx-auto">
            <Link to="/" className="block mb-2 text-blue-500">Home</Link>
            <Link to="/accessories" className="block mb-2 text-blue-500">Accessories</Link>
            <Link to="/info" className="block mb-2 text-blue-500">Info</Link>
            <Link to="/shop" className="block mb-2 text-blue-500">Shop</Link>
          </div>
        </div>
      )}
    </div>
  );
};
