import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const [cartItems, setCartItems] = useState([]);

const plantsArray = [
    {
      name: 'Aloe Vera',
      imageUrl: 'https://example.com/aloe-vera.jpg',
      description: 'Aloe Vera is a popular succulent plant.',
      cost: 15.99,
    },
    {
      name: 'Bamboo',
      imageUrl: 'https://example.com/bamboo.jpg',
      description: 'Bamboo is a fast-growing plant that is great for indoor decor.',
      cost: 22.50,
    },
    {
      name: 'Snake Plant',
      imageUrl: 'https://example.com/snake-plant.jpg',
      description: 'Snake plant is an easy-to-care-for indoor plant.',
      cost: 12.75,
    },
    {
      name: 'Cactus',
      imageUrl: 'https://example.com/cactus.jpg',
      description: 'Cactus is a low-maintenance plant perfect for sunny areas.',
      cost: 9.99,
    },
    {
      name: 'Fern',
      imageUrl: 'https://example.com/fern.jpg',
      description: 'Ferns are lush and thrive in low light conditions.',
      cost: 19.99,
    },
    {
      name: 'Spider Plant',
      imageUrl: 'https://example.com/spider-plant.jpg',
      description: 'Spider plants are great air purifiers and easy to grow.',
      cost: 14.99,
    },
    {
      name: 'Peace Lily',
      imageUrl: 'https://example.com/peace-lily.jpg',
      description: 'Peace Lily is an elegant plant known for its white blooms.',
      cost: 24.99,
    },
    {
      name: 'Orchid',
      imageUrl: 'https://example.com/orchid.jpg',
      description: 'Orchids are beautiful flowering plants that require moderate care.',
      cost: 35.50,
    },
    {
      name: 'Pothos',
      imageUrl: 'https://example.com/pothos.jpg',
      description: 'Pothos is a trailing vine plant known for its heart-shaped leaves.',
      cost: 18.75,
    },
];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    }

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Show the cart when clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); // Hide the cart when "Plants" link is clicked
    };

    const handleAddToCart = (plant) => {
        setCartItems((prevItems) => [...prevItems, plant]);
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'>🛒</h1></a></div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="category">
                            <h2>{category.category}</h2>
                            <div className="plants">
                                {category.plants.map((plant) => (
                                    <div key={plant.name} className="product-card">
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p><strong>Price:</strong> {plant.cost}</p>
                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} cartItems={cartItems} />
            )}
        </div>
    );
}

export default ProductList;
