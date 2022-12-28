import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncStateTableData = createAsyncThunk(
  "stateTableSlice/asyncStateTableData",
  async () => {
    const res = await fetch(
      "https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/st_list.json"
    );

    if (!res.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = await res.json();

    console.log(data);
    return data;
  }
);

const initialState = {
  isLoding: false,
  result: "",
  msg: "",
  rows: [],
};

const stateTableSlice = createSlice({
  name: "stateTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncStateTableData.pending, (state, action) => {
        state.isLoding = true;
      })
      .addCase(asyncStateTableData.fulfilled, (state, action) => {
        state.isLoding = false;
        state.rows = action.payload.rows;
      })
      .addCase(asyncStateTableData.rejected, (state, action) => {
        state.isLoding = true;
      });
  },
});

export const stateTableActions = stateTableSlice.actions;

export default stateTableSlice.reducer;
