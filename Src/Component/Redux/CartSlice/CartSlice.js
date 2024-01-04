import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: {
      reducer: (state, action) => {
        const itemToAdd = action.payload;
        const existingItem = state.items.find(item => item.name === itemToAdd.name);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...itemToAdd, quantity: 1 });
        }

        state.totalPrice += itemToAdd.price;

        console.log('Added item with ID:', itemToAdd.id);
      },
      prepare: item => {
        const { name, price, image, description } = item;
        return {
          payload: {
            id: Date.now(),
            name,
            price,
            image,
            description,
          },
        };
      },
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const removedItem = state.items.find(item => item.id === itemId);
      if (removedItem) {
        state.items = state.items.filter(item => item.id !== itemId);
        state.totalPrice -= removedItem.price * removedItem.quantity;
      }
    },
    incrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.items.find(item => item.id === itemId);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        state.totalPrice += itemToIncrement.price;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.items.find(item => item.id === itemId);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        state.totalPrice -= itemToDecrement.price;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;



// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalPrice: 0,
//   },
//   reducers: {
//     addItemToCart: (state, action) => {
//       const newItem = action.payload;

//       const existingItem = state.items.find(item => item.id === newItem.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...newItem, quantity: 1 });
//       }

//       state.totalPrice += newItem.price;
//     },