import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice } from './slices/Favorites/favoritesSlice'

export default configureStore({
  reducer: {
     favorites: favoritesSlice.reducer,
  },
})