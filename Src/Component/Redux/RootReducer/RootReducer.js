
import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from '../CartSlice/CartSlice';
import Favorite from '../Favouriteslice/Favourite';


const rootReducer = combineReducers({
  cart: CartSlice,
  favorite: Favorite
});

export default rootReducer;
