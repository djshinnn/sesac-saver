import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncMonthChartData = createAsyncThunk(
  "totalChartSlice/asyncMonthChartData",
  async () => {
    const res = await fetch(
      "https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/monthly.json"
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
  totalAmt: [],
  seoulAmt: [],
  filteredData: {
    amt: [],
    regionCode: [],
  },
};

const totalChartSlice = createSlice({
  name: "totalChart",
  initialState,
  reducers: {
    getFilteredData(state, action) {
      state.filteredData.amt = action.payload.amt;
      state.filteredData.regionCode = action.payload.regionCode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncMonthChartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncMonthChartData.fulfilled, (state, action) => {
        const seoulAmt = action.payload.rows
          .filter((data) => data.regionCode === "su")
          .map((data) => data.chargeAmt);
        const totalAmt = action.payload.rows
          .filter((data) => data.regionCode === "ko")
          .map((data) => data.chargeAmt);

        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
        state.seoulAmt = seoulAmt;
        state.totalAmt = totalAmt;
      })
      .addCase(asyncMonthChartData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const totalChartActions = totalChartSlice.actions;

export default totalChartSlice.reducer;
