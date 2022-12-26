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
  month: [],
  totalData: [],
  seoulData: [],
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
        const seoulData = action.payload.row
          .filter((data) => data.regionCode === "su")
          .map((data) => data.chargeAmt);
        const totalData = action.payload.row.filter(
          (data) => data.regionCode === "ko"
        );
        const month = totalData.map((data) => data.month);
        const totalAmt = totalData.map((data) => data.chargeAmt);

        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.row = action.payload.row;
        state.month = month;
        state.seoulData = seoulData;
        state.totalData = totalAmt;
      })
      .addCase(asyncMonthChartData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const totalChartActions = totalChartSlice.actions;

export default totalChartSlice.reducer;
