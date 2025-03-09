import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will hold the cart items, each containing the plant details
};

// Create the cart slice with reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add a new item to the cart
    addItem: (state, action) => {
      const newItem = action.payload;

      // Check if the item is already in the cart by plant name
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, just increase the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with quantity = 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart based on the plant name
    removeItem: (state, action) => {
      const name = action.payload;
      // Filter out the item by name
      state.items = state.items.filter(item => item.name !== name);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      
      if (item) {
        item.quantity = quantity; // Update quantity of the specific item
      }
    },
  },
});

// Export actions to be used in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as default to be included in the store
export default cartSlice.reducer;
