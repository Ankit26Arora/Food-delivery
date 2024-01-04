import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items:[]
  },
  reducers: {
    addToFavorites: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        console.log("item found in fav",state)
      },
      prepare: item => {
        const {name, price, image, description} = item;
        return {
          payload: {
            name,
            price,
            image,
            description,
          },
        };
      },
    },
    removeItemFromFavourite: (state, action) => {
      const itemId = action.payload;
      return state.items.filter(item => item.id !== itemId);
    },
  },
});

export const { addToFavorites, removeItemFromFavourite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
