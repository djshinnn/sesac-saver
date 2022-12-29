import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncStationReportData = createAsyncThunk(
  "stationReportSlice/asyncStationReportData",
  async (stationId) => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/monitoring/stations/${stationId}/reports.json`
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
  rows: [],
};

const stationReportSlice = createSlice({
  name: "stationReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncStationReportData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncStationReportData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncStationReportData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const stationReportActions = stationReportSlice.actions;

export default stationReportSlice.reducer;
