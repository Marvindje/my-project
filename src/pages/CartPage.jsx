import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import ProductCategories from '../components/ProductCategories';
import CartContext from '../CartContext';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <SearchBar />
      <ProductCategories />
      {/* Display cart items here */}
      <p>You have {cart.length} items in your cart.</p>
    </div>
  );
};

export default CartPage;
