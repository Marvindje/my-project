import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
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

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <FilterProvider> 
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/hommes/tshirts" element={<MenTshirtsPage />} />
              <Route path="/hommes/chemises" element={<MenShirtsPage />} />
              <Route path="/femmes/tshirts" element={<WomenTshirtsPage />} />
              <Route path="/femmes/chemises" element={<WomenShirtsPage />} />
              <Route path="/accessoires/sacsamain" element={<AccessoriesHandbagsPage />} />
              <Route path="/accessoires/sacsados" element={<AccessoriesBackpacksPage />} />
              <Route path="/accessoires/casquettes" element={<AccessoriesCapsPage />} />
            </Routes>
          </div>
        </Router>
      </FilterProvider> 
    </CartContext.Provider>
  );
}

export default App;
