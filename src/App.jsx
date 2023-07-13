import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import AccessoriesPage from "./pages/AccessoriesPage"
import InfoPage from "./pages/InfoPage"
import ShopPage from "./pages/ShopPage"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
    </Router>
  );
}

export default App;
