import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Our Store!</h1>
      <Link to="/products">Shop Now</Link>
    </div>
  );
};

export default Homepage;
