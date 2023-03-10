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

// chargerManagement errorList
import errorListReducer from "./errorList/errorListSlice";

// memberManagement
import memberListReducer from "./memberManagement/memberListSlice";
import memberCardListReducer from "./memberManagement/memberCardListSlice";
import memberPayListReducer from "./memberManagement/memberPayListSlice";

//chargingHistory stationHistory
import stationHistoryReducer from "./chargingHistory/stationHistorySlice";
import stationHistoryMonthlyReducer from "./chargingHistory/stationHistoryMonthlySlice";
import memberHistoryReducer from "./chargingHistory/memberHistorySlice";
import memberHistoryMonthlyReducer from "./chargingHistory/memberHistoryMonthlySlice";

// customerService
import noticeReducer from "./customerService/noticeSlice";
import faqReducer from "./customerService/faqSlice";

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

    // chargerManagement chargingStation
    stationList: stationListReducer,
    chargerList: chargerListReducer,

    // chargerManagement errorList
    errorList: errorListReducer,

    // memberManagement
    memberList: memberListReducer,
    memberCardList: memberCardListReducer,
    memberPayList: memberPayListReducer,

    //chargingHistory stationHistory
    stationHistory: stationHistoryReducer,
    stationHistoryMonthly: stationHistoryMonthlyReducer,
    memberHistory: memberHistoryReducer,
    memberHistoryMonthly: memberHistoryMonthlyReducer,

    // customerService
    notice: noticeReducer,
    faq: faqReducer,
  },
});

export default store;
