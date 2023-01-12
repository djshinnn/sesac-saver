import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncCompaniesListData = createAsyncThunk(
  "companiesListSlice/asyncCompaniesListData",
  async () => {
    const res = await fetch(
      "https://sesac-827ad-default-rtdb.asia-southeast1.firebasedatabase.app/companies.json",
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
  companyId: [],
};

const companiesListSlice = createSlice({
  name: "companiesList",
  initialState,
  reducers: {
    selectCompanyId(state, action) {
      let deleteCompanyId = [];
      deleteCompanyId.push(...state.companyId, action.payload);

      state.companyId = [...deleteCompanyId];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncCompaniesListData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(asyncCompaniesListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.msg = action.payload.msg;
        state.rows = action.payload.rows;
      })
      .addCase(asyncCompaniesListData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const companiesListActions = companiesListSlice.actions;

export default companiesListSlice.reducer;
