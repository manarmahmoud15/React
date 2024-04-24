import { createSlice } from "@reduxjs/toolkit";

const Initial_State = {
  counter_val: 6,
  Counter_Max_Value: 100,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState: Initial_State,
  reducers: {
    increaseCounter: (state, action) => {
      state.counter_val = state.counter_val + 1;
    },
    decreaseCounter: (state, action) => {
      state.counter_val = action.payload;
    },
    increaseByValue: (state, action) => {
      state.counter_val = state.counter_val + action.payload;
    },
    resetCounter: (state, action) => {
      state.counter_val = 0;
    },
  },
});
export const {
  increaseByValue,
  increaseCounter,
  resetCounter,
  decreaseCounter,
} = CounterSlice.actions;
export default CounterSlice.reducer ;