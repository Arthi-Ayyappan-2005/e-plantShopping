import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();  // Get dispatch function

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      // Remove the dollar sign and convert the price string to a number
      const cost = parseFloat(item.cost.substring(1));  // Remove '$' and parse as number
      total += cost * item.quantity;  // Multiply by the quantity and add to total
    });
    return total.toFixed(2);  // Return the total cost with 2 decimal places
  };
    

  // Handle continue shopping click
  const handleContinueShopping = () => {
    onContinueShopping();  // Trigger continue shopping function passed as a prop
  };

  // Handle incrementing item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing item quantity
  const handleDecrement = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
      updateTotal();  // Update the overall total cost when the quantity changes
    } else {
      dispatch(removeItem(item.name));  // Remove item if quantity goes to 0
      updateTotal();  // Update total cost when item is removed
    }
  };

  // Handle removing item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));  // Dispatch removeItem with the item's name
  };

  // Calculate total cost for a specific item
  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);  // Total cost = cost * quantity
  };

  return (
    <div className="cart-container">
      {/* Display the total cart amount */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div>
        {/* Iterate through the cart and render each item */}
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            {/* Display the product image */}
            <img className="cart-item-image" src={item.imageUrl} alt={item.name} />
            
            <div className="cart-item-details">
              {/* Display product details */}
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              
              {/* Quantity control buttons */}
              <div className="cart-item-quantity">
                <button 
                  className="cart-item-button cart-item-button-dec" 
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                
                <span className="cart-item-quantity-value">{item.quantity}</span>
                
                <button 
                  className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              
              {/* Display the total cost of the item */}
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              
              {/* Delete button to remove item */}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      
      <div className="continue_shopping_btn">
        {/* Continue shopping button */}
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        {/* Checkout button */}
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

};

export default CartItem;
