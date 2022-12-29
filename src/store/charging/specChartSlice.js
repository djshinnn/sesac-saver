import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncSpecChartData = createAsyncThunk(
  "specChartSlice/asyncSpecChartData",
  async (stationId) => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/monitoring/stations/${stationId}.json`
    );

    if (!res.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = await res.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  info: {},
  status: {},
  rows: [],
};

const specChartSlice = createSlice({
  name: "specChart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncSpecChartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncSpecChartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.info = action.payload.info;
        state.status = action.payload.status;
        state.rows = action.payload.rows;
      })
      .addCase(asyncSpecChartData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const specChartActions = specChartSlice.actions;

export default specChartSlice.reducer;
