import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CartContext from './CartContext';
import { FilterProvider } from './FilterContext'; // Assurez-vous d'importer FilterProvider
import { BeakerIcon } from '@heroicons/react/24/solid'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <FilterProvider> 
        <Router>
          <div className="App">
            <BeakerIcon />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </div>
        </Router>
      </FilterProvider> 
    </CartContext.Provider>
  );
}

export default App;
