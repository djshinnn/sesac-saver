import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncDetailListData = createAsyncThunk(
  "dataListSlice/asyncDetailListData",
  async () => {
    const res = await fetch(
      "https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/chargers.json"
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

const detailListSlice = createSlice({
  name: "detailList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncDetailListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncDetailListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncDetailListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const detailListActions = detailListSlice.actions;

export default detailListSlice.reducer;
