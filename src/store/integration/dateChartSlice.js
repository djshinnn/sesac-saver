import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncDateChartData = createAsyncThunk(
  "dateChartSlice/asyncDateChartData",
  async () => {
    const res = await fetch(
      "https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/daily.json"
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
  seoulData: {
    chargeAmt: [],
    fare: [],
    yesterday: [],
    today: [],
  },
  filteredData: {
    // 첫 번째는 어제 충전량, 두 번째는 오늘 충전량
    chargeAmt: [],
    fare: [],
    yesterday: [],
    today: [],
  },
};

const dateChartSlice = createSlice({
  name: "dateChart",
  initialState,
  reducers: {
    getFilteredData(state, action) {
      state.filteredData.chargeAmt = action.payload.chargeAmt;
      state.filteredData.fare = action.payload.fare;
      state.filteredData.yesterday = action.payload.yesterday[0];
      state.filteredData.today = action.payload.today[1];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncDateChartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncDateChartData.fulfilled, (state, action) => {
        const seoulData = action.payload.rows.filter(
          (data) => data.regionCode === "su"
        );

        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;

        // filter로 뽑아낸 seoulData 데이터 정제
        state.seoulData.chargeAmt = seoulData.map((item) => item.chargeAmt);
        state.seoulData.fare = seoulData.map((item) => item.fare);
        state.seoulData.yesterday = seoulData.map((item) => item.yesterday)[0];
        state.seoulData.today = seoulData.map((item) => item.today)[1];
      })
      .addCase(asyncDateChartData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const dateChartActions = dateChartSlice.actions;

export default dateChartSlice.reducer;
