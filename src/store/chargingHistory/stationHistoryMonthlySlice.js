import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncStationHistoryMonthlyData = createAsyncThunk(
  "stationHistoryMonthlyMonthlySlice/asyncStationHistoryMonthlyMonthlyData",
  async () => {
    const res = await fetch(
      "https://sesac-saver-25d05-default-rtdb.asia-southeast1.firebasedatabase.app/stations/usages/monthly.json",
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

const stationHistoryMonthlySlice = createSlice({
  name: "stationHistoryMonthly",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncStationHistoryMonthlyData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncStationHistoryMonthlyData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.region = action.payload.region;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
        state.total = action.payload.total;
      })
      .addCase(asyncStationHistoryMonthlyData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const stationHistoryMonthlyActions = stationHistoryMonthlySlice.actions;

export default stationHistoryMonthlySlice.reducer;
