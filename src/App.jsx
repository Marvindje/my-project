import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Homepage from './pages/HomePage';
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

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <FilterProvider> 
        <Router>
          <ParallaxProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ShopPage />} />
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
          </ParallaxProvider>
        </Router>
      </FilterProvider> 
    </CartContext.Provider>
  );
}

export default App;
