import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncMemberHistoryMonthlyData = createAsyncThunk(
  "memberHistoryMonthlyMonthlySlice/asyncMemberHistoryMonthlyMonthlyData",
  async () => {
    const res = await fetch(
      "https://sesac-saver-25d05-default-rtdb.asia-southeast1.firebasedatabase.app/members/usages/monthly.json",
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

const memberHistoryMonthlySlice = createSlice({
  name: "memberHistoryMonthly",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMemberHistoryMonthlyData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMemberHistoryMonthlyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.region = action.payload.region;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
        state.total = action.payload.total;
      })
      .addCase(asyncMemberHistoryMonthlyData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const memberHistoryMonthlyActions = memberHistoryMonthlySlice.actions;

export default memberHistoryMonthlySlice.reducer;
