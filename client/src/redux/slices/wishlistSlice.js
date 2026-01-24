import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    loading: (state) => {
      return { ...state, loading: true };
    },
    success: (state, action) => {
      return { ...state, loading: false, data: action.payload };
    },
    error: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export const { loading, success, error } = wishlistSlice.actions;

export default wishlistSlice.reducer;