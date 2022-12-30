import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// 비동기 함수 (데이터 요청)
import { asyncMonthChartData } from "../../store/integration/totalChartSlice";
import { asyncDateChartData } from "../../store/integration/dateChartSlice";
import { asyncCurrentChartData } from "../../store/integration/currentChartSlice";
import { asyncStateTableData } from "../../store/integration/stateTableSlice";
import { asyncErrorFeedData } from "../../store/integration/errorFeedSlice";

import ChartContainer from "../container/ChartContainer";
import MapContainer from "../container/MapContainer";

const Integration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMonthChartData());
    dispatch(asyncDateChartData());
    dispatch(asyncCurrentChartData());
    dispatch(asyncStateTableData());
    dispatch(asyncErrorFeedData());
  }, [dispatch]);

  return (
    <div className="integration">
      <MapContainer />
      <ChartContainer />
    </div>
  );
};

export default Integration;
