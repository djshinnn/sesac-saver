import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncItemSpec = createAsyncThunk(
  "itemSpecSlice/asyncItemSpec",
  async (chargerId) => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/monitoring/chargers/${chargerId}.json`
    );

    if (!res.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = res.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  chargerInfo: [],
};

const itemSpecSlice = createSlice({
  name: "itemSpec",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncItemSpec.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncItemSpec.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.chargerInfo = action.payload.chargerInfo;
      })
      .addCase(asyncItemSpec.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const itemSpecActions = itemSpecSlice.actions;

export default itemSpecSlice.reducer;
