import { configureStore } from "@reduxjs/toolkit";
import totalChartReducer from "./totalChartSlice";
import dateChartReducer from "./dateChartSlice";
import currentChartReducer from "./currentChartSlice";
import stateTableReducer from "./stateTableSlice";
import errorFeedReducer from "./errorFeedSlice";
import specChartReducer from "./specChartSlice";

const store = configureStore({
	reducer: {
		totalChart: totalChartReducer,
		dateChart: dateChartReducer,
		currentChart: currentChartReducer,
		stateTable: stateTableReducer,
		errorFeed: errorFeedReducer,
		specChart: specChartReducer,
	},
});

export default store;
