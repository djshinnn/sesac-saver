import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncMemberListData = createAsyncThunk(
  "memberListSlice/asyncMemberListData",
  async () => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`,
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

const memberListSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMemberListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMemberListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
      })
      .addCase(asyncMemberListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const memberListActions = memberListSlice.actions;

export default memberListSlice.reducer;
