import { configureStore } from "@reduxjs/toolkit";

// monitoring integration Reducer
import totalChartReducer from "./totalChartSlice";
import dateChartReducer from "./dateChartSlice";
import currentChartReducer from "./currentChartSlice";
import stateTableReducer from "./stateTableSlice";
import errorFeedReducer from "./errorFeedSlice";

// monitoring detailItem Reducer
import itemReportReducer from "./detailItem/itemReportSlice";
import itemSpecReducer from "./detailItem/itemSpecSlice";
import usingLogReducer from "./detailItem/usingLogSlice";

const store = configureStore({
  reducer: {
    // monitoring integration
    totalChart: totalChartReducer,
    dateChart: dateChartReducer,
    currentChart: currentChartReducer,
    stateTable: stateTableReducer,
    errorFeed: errorFeedReducer,

    // monitoring detailitem
    itemReport: itemReportReducer,
    itemSpec: itemSpecReducer,
    usingLog: usingLogReducer,
  },
});

export default store;
