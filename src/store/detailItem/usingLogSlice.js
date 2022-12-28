import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const asyncUsingLog = createAsyncThunk(
  "usingLogSlice/asyncUsingLog",
  async () => {
    const { itemId } = useParams();
    const res = await fetch(
      `https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/chargers/${itemId}/logs.json`
    );

    if (!res.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = res.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  result: "",
  msg: "",
  rows: [],
};

const usingLogSlice = createSlice({
  name: "itemReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncUsingLog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncUsingLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncUsingLog.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const usingLogActions = usingLogSlice.actions;

export default usingLogSlice.reducer;
