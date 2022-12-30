import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncItemReport = createAsyncThunk(
  "itemReportSlice/asyncItemReport",
  async (chargerId) => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/monitoring/chargers/${chargerId}/reports.json`
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
  rows: [],
};

const itemReportSlice = createSlice({
  name: "itemReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncItemReport.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncItemReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncItemReport.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const itemReportActions = itemReportSlice.actions;

export default itemReportSlice.reducer;
