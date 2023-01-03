import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncErrorList = createAsyncThunk("errorListSlice/asyncErrorList", async () => {
  const res = await fetch(
    `https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/charger-errors.json`,
  );

  if (!res.ok) {
    throw new Error("Could not fetch data!");
  }

  const data = res.json();
  return data;
});

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  overall: {},
  page: {},
  rows: [],
};

const errorListSlice = createSlice({
  name: "errorList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncErrorList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncErrorList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.overall = action.payload.overall;
        state.page = action.payload.page;
        state.rows = action.payload.rows;
      })
      .addCase(asyncErrorList.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const errorListActions = errorListSlice.actions;

export default errorListSlice.reducer;
