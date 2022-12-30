import { configureStore } from "@reduxjs/toolkit";

// monitoring integration Reducer
import totalChartReducer from "./integration/totalChartSlice";
import dateChartReducer from "./integration/dateChartSlice";
import currentChartReducer from "./integration/currentChartSlice";
import stateTableReducer from "./integration/stateTableSlice";
import errorFeedReducer from "./integration/errorFeedSlice";

// monitoring charging Reducer
import detailListReducer from "./charging/detailListSlice";
import specChartReducer from "./charging/specChartSlice";
import stationReportReducer from "./charging/stationReportSlice";

// monitoring detailItem Reducer
import itemReportReducer from "./detailItem/itemReportSlice";
import itemSpecReducer from "./detailItem/itemSpecSlice";
import usingLogReducer from "./detailItem/usingLogSlice";

// chargerManagement companies Reducer
import companiesListReducer from "./companies/companiesListSlice";

// chargerManagement chargingStation Reducer
import stationListReducer from "./chargingStation/stationListSlice";
import chargerListReducer from "./chargingStation/chargerListSlice";

const store = configureStore({
  reducer: {
    // monitoring charging
    specChart: specChartReducer,
    detailList: detailListReducer,
    stationReport: stationReportReducer,

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

    // chargerManagement companies
    companiesList: companiesListReducer,

    // chargerManagement chargingStation Reducer
    stationList: stationListReducer,
    chargerList: chargerListReducer,
  },
});

export default store;
