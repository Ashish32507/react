import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
};
export const CounterSlices = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

export const { increament, decreament } = CounterSlices.actions;
export default CounterSlices.reducer;
