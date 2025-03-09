import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';  // Assuming CartItem is set up correctly
import './CartComponent.css';

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);  // Fetch cart items from the Redux store

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.cost.substring(1)) * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.name} item={item} />)
      )}
      <h3>Total: ${calculateTotalAmount()}</h3>
    </div>
  );
};

export default CartComponent;
