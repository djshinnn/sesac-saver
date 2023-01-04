import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncMemberHistoryData = createAsyncThunk(
  "memberHistorySlice/asyncMemberHistoryData",
  async () => {
    const res = await fetch(
      "https://sesac-saver-25d05-default-rtdb.asia-southeast1.firebasedatabase.app/members/usages.json",
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

const memberHistorySlice = createSlice({
  name: "memberHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMemberHistoryData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMemberHistoryData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.region = action.payload.region;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
        state.total = action.payload.total;
      })
      .addCase(asyncMemberHistoryData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const memberHistoryActions = memberHistorySlice.actions;

export default memberHistorySlice.reducer;
