import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncStationListData = createAsyncThunk(
  "chargingStationSlice/asyncStationListData",
  async () => {
    const res = await fetch(
      "https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/stations.json",
    );

    if (!res.ok) {
      throw new Error("Could not fetch Data");
    }

    const data = await res.json();
    return data;
  },
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  rows: [],
};

const stationListSlice = createSlice({
  name: "stationList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncStationListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncStationListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncStationListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const chargingStationActions = stationListSlice.actions;

export default stationListSlice.reducer;
