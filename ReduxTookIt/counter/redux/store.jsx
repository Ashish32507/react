import { configureStore } from "@reduxjs/toolkit";
import CounterSlices from "./slices/CounterSlices";

export const store = configureStore({
  reducer: {
    Counter: CounterSlices,
  },
});
