import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState: {
      favorite: [],
  },
  reducers: {
   addToFavorite: (state, action ) => {
    state.favorite = [...state.favorite, action.payload]; // Agrega una nueva pizza al array
  },
  removeFromFavorite: (state, action) => {
    state.favorite = state.favorite.filter(
      (pizza) => pizza.id !== action.payload // Elimina una pizza por ID
    );
   },
 },
});


// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;