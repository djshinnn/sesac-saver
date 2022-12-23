import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: { region: "" },
  reducers: {
    changeRegion(state, action) {
      state.region = action.payload;
    },
  },
});

export const mapSliceActions = mapSlice.actions;

export default mapSlice.reducer;
