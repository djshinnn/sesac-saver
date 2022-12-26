import { configureStore } from "@reduxjs/toolkit";
import totalChartReducer from "./totalChartSlice";
import dateChartReducer from "./dateChartSlice";
import currentChartReducer from "./currentChartSlice";
import stateTableReducer from "./stateTableSlice";

const store = configureStore({
  reducer: {
    totalChart: totalChartReducer,
    dateChart: dateChartReducer,
    currentChart: currentChartReducer,
    stateTable: stateTableReducer,
  },
});

export default store;
