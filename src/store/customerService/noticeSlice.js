import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncNoticeData = createAsyncThunk("noticeSlice/asyncNoticeData", async () => {
  const res = await fetch(
    "https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/notices.json",
  );

  if (!res.ok) {
    throw new Error("Could not fetch Data");
  }

  const data = await res.json();
  return data;
});

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  page: {},
  notice: [],
};

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncNoticeData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncNoticeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.page = action.payload.page;
        state.notice = action.payload.notice;
      })
      .addCase(asyncNoticeData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const noticeSliceActions = noticeSlice.actions;

export default noticeSlice.reducer;
