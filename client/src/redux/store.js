import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slices/productSlice"
import wishlistReducer from "./slices/wishlistSlice"

export const store = configureStore({
  reducer: {
    product:productReducer,
    wishlist:wishlistReducer
  },
})