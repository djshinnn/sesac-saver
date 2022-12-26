import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncCurrentChartData = createAsyncThunk(
	"currentChartSlice/asyncCurrentChartData",
	async () => {
		const res = await fetch(
			"https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/st_available.json"
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
	avg: 0,
	rows: [],
};

const currentChartSlice = createSlice({
	name: "currentChart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(asyncCurrentChartData.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(asyncCurrentChartData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.result = action.payload.result;
				state.msg = action.payload.msg;
				state.avg = action.payload.avg;
				state.rows = action.payload.rows;
			})
			.addCase(asyncCurrentChartData.rejected, (state, action) => {
				state.isLoading = true;
			});
	},
});

export const currentChartActions = currentChartSlice.actions;

export default currentChartSlice.reducer;
