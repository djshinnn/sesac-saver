import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncStationHistoryData = createAsyncThunk(
  "stationHistorySlice/asyncStationHistoryData",
  async () => {
    const res = await fetch(
      "https://sesac-saver-25d05-default-rtdb.asia-southeast1.firebasedatabase.app/stations/usages.json",
    );

    if (!res.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = await res.json();
    return data;
  },
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  region: "",
  page: {},
  rows: [],
  total: {},
};

const stationHistorySlice = createSlice({
  name: "stationHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncStationHistoryData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncStationHistoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.region = action.payload.region;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
        state.total = action.payload.total;
      })
      .addCase(asyncStationHistoryData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const stationHistoryActions = stationHistorySlice.actions;

export default stationHistorySlice.reducer;
