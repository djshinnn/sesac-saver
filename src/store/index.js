import { configureStore } from "@reduxjs/toolkit";
import totalChartReducer from "./totalChartSlice";

const store = configureStore({
  reducer: { totalChart: totalChartReducer },
});

export default store;
