import { configureStore } from "@reduxjs/toolkit";
import mapSliceReducer from "./mapSlice";
import totalChartReducer from "./totalChartSlice";

const store = configureStore({
  reducer: { map: mapSliceReducer, totalChart: totalChartReducer },
});

export default store;
