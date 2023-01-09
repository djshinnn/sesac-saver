import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncFaqData = createAsyncThunk("faqSlice/asyncFaqData", async () => {
  const res = await fetch(
    "https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/faq.json",
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
  faq: [],
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncFaqData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncFaqData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.page = action.payload.page;
        state.faq = action.payload.faq;
      })
      .addCase(asyncFaqData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const faqSliceActions = faqSlice.actions;

export default faqSlice.reducer;
