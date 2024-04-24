import { createSlice } from "@reduxjs/toolkit";

const WatchList = [];
const AddToFavSlice = createSlice({
  name: "AddToFavSlice",
  initialState: WatchList,
  reducers: {
    AddToWatchList: (state, action) => {
      state.push(action.payload);
    },
    RemoveFromWatchList: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { AddToWatchList, RemoveFromWatchList } = AddToFavSlice.actions;

export default AddToFavSlice.reducer;
