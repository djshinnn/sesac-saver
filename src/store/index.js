import { configureStore } from "@reduxjs/toolkit";
import totalChartReducer from "./totalChartSlice";
import dateChartReducer from "./dateChartSlice";

const store = configureStore({
  reducer: { totalChart: totalChartReducer, dateChart: dateChartReducer },
});

export default store;
