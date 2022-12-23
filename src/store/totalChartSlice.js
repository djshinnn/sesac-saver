import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncMonthChartData = createAsyncThunk(
  "totalChartSlice/asyncMonthChartData",
  async () => {
    const res = await fetch(
      "https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monthlyTotal.json"
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
  row: [],
};

const totalChartSlice = createSlice({
  name: "totalChart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncMonthChartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMonthChartData.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.row = action.payload.row;
      })
      .addCase(asyncMonthChartData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const totalCharActions = totalChartSlice.actions;

export default totalChartSlice.reducer;
