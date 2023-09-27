import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MenTshirtsPage from './pages/MenTshirtsPage';
import MenShirtsPage from './pages/MenShirtsPage';
import WomenTshirtsPage from './pages/WomenTshirtsPage';
import WomenShirtsPage from './pages/WomenShirtsPage';
import AccessoriesHandbagsPage from './pages/AccessoriesHandbagsPage';
import AccessoriesBackpacksPage from './pages/AccessoriesBackpacksPage';
import AccessoriesCapsPage from './pages/AccessoriesCapsPage';
import CartContext from './CartContext';
import { FilterProvider } from './FilterContext';
import { Navbar } from './components/Navbar'; 

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <FilterProvider> 
        <Router>
          <ParallaxProvider>
            <div className="App">
              <Navbar />
              <AppRoutes />
            </div>
          </ParallaxProvider>
        </Router>
      </FilterProvider> 
    </CartContext.Provider>
  );
}


