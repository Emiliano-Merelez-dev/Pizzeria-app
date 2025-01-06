import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice } from './slices/Favorites/favoritesSlice'
import { itemPizzaSlice } from './slices/items/ItemPizzaSlice'

export default configureStore({
  reducer: {
     favorites: favoritesSlice.reducer,
     items: itemPizzaSlice.reducer,
  },
})