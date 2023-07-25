import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const handleClickOutside = (event) => {
    if (event.target.id === 'menu') {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderSubMenu = (menuName) => {
    if (menuName === 'Hommes') {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg">
          <Link to="/hommes/tshirts" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">T-shirts</Link>
          <Link to="/hommes/chemises" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Chemises</Link>
          <Link to="/hommes/sweatshirts" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Sweatshirts</Link>
        </div>
      );
    } else if (menuName === 'Femmes') {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg">
          <Link to="/femmes/tshirts" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">T-shirts</Link>
          <Link to="/femmes/chemises" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Chemises</Link>
          <Link to="/femmes/sweatshirts" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Sweatshirts</Link>
        </div>
      );
    } else if (menuName === 'Accessoires') {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg">
          <Link to="/accessoires/sacsamain" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Sacs</Link>
          <Link to="/accessoires/sacsados" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Backpacks</Link>
          <Link to="/accessoires/casquettes" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Casquettes</Link>
          <Link to="/accessoires/bijoux" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Bijoux</Link>
          <Link to="/accessoires/lunettes" className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110">Lunettes</Link>
        </div>
      );
    }
  };

  return (
    <nav className="flex items-center justify-center p-6 bg-gray-800 text-white w-full relative mt-4">
      <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>VogueWardrobe</h1>
      <div className="absolute right-6 flex space-x-4">
        <div onMouseEnter={() => handleMouseEnter('Hommes')} onMouseLeave={handleMouseLeave}>
          <p>Hommes</p>
          {activeMenu === 'Hommes' && renderSubMenu('Hommes')}
        </div>
        <div onMouseEnter={() => handleMouseEnter('Femmes')} onMouseLeave={handleMouseLeave}>
          <p>Femmes</p>
          {activeMenu === 'Femmes' && renderSubMenu('Femmes')}
        </div>
        <div onMouseEnter={() => handleMouseEnter('Accessoires')} onMouseLeave={handleMouseLeave}>
          <p>Accessoires</p>
          {activeMenu === 'Accessoires' && renderSubMenu('Accessoires')}
        </div>
      </div>
    </nav>
  );
};
