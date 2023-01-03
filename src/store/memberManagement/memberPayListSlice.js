import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncMemberPayListData = createAsyncThunk(
  "memberPayListSlice/asyncMemberPayListData",
  async () => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json`,
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
  page: {},
  rows: [],
};

const memberPayListSlice = createSlice({
  name: "memberPayList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMemberPayListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMemberPayListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
      })
      .addCase(asyncMemberPayListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const memberPayListActions = memberPayListSlice.actions;

export default memberPayListSlice.reducer;
