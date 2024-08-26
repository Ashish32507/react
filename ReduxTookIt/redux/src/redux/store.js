import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../redux/slice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
