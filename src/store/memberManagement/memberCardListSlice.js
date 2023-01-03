import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncMemberCardListData = createAsyncThunk(
  "memberCardListSlice/asyncMemberCardListData",
  async () => {
    const res = await fetch(
      `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json`,
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

const memberCardListSlice = createSlice({
  name: "memberCardList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMemberCardListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMemberCardListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
      })
      .addCase(asyncMemberCardListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const memberCardListActions = memberCardListSlice.actions;

export default memberCardListSlice.reducer;
