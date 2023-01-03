import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncChargerListData = createAsyncThunk(
  "chargerListSlice/asyncChargerListData",
  async (stationId) => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/stations/${stationId}/chargers.json`,
    );

    if (!res.ok) {
      throw new Error("Could not fetch Data");
    }

    const data = await res.json();
    return data;
  },
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  rows: [],
};

const chargerListSlice = createSlice({
  name: "chargerList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncChargerListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncChargerListData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncChargerListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const chargerListActions = chargerListSlice.actions;

export default chargerListSlice.reducer;
