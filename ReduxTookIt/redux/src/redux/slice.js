import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    k: 0, // you might want to rename this to something more meaningful, like "itemsCount"
  },
  reducers: {
    addToCart: (state, action) => {
      // Renamed to follow camelCase convention
      state.k = state.k + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions; // Ensure you're using the correct action name
export default cartSlice.reducer;
