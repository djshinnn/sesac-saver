import { configureStore } from "@reduxjs/toolkit";
import totalChartReducer from "./totalChartSlice";
import dateChartReducer from "./dateChartSlice";
import currentChartReducer from "./currentChartSlice";

const store = configureStore({
	reducer: {
		totalChart: totalChartReducer,
		dateChart: dateChartReducer,
		currentChart: currentChartReducer,
	},
});

export default store;
