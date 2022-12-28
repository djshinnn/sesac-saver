import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncErrorFeedData = createAsyncThunk(
	"errorFeedSlice/asyncErrorFeedData",
	async () => {
		const res = await fetch(
			"https://saver-practice-default-rtdb.asia-southeast1.firebasedatabase.app/monitering/error_feeds.json"
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
	region: "",
	rows: [],
};

const errorFeedSlice = createSlice({
	name: "errorFeed",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(asyncErrorFeedData.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(asyncErrorFeedData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.result = action.payload.result;
				state.msg = action.payload.msg;
				state.region = action.payload.region;
				state.rows = action.payload.rows;
			})
			.addCase(asyncErrorFeedData.rejected, (state, action) => {
				state.isLoading = true;
			});
	},
});

export const errorFeedActions = errorFeedSlice.actions;

export default errorFeedSlice.reducer;
