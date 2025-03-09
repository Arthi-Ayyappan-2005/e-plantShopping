import React, { useState } from 'react';
import ProductList from './ProductList';
import CartComponent from './CartComponent';
import CartItem from './CartItem';  // Import CartItem component
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Landing Page or Product List */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <h1>Welcome To Paradise Nursery</h1>
          <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>

      {/* Product List */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onCartClick={handleCartClick} />
      </div>

      {/* Cart Item (Shopping Cart) */}
      <div className={`cart-container ${showCart ? 'visible' : ''}`}>
        <CartItem onContinueShopping={handleContinueShopping} />
      </div>
    </div>
  );
}

export default App;
