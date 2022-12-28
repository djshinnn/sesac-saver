import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

// 비동기 함수 (데이터 요청)
import { asyncMonthChartData } from "../../store/integration/totalChartSlice";
import { asyncDateChartData } from "../../store/integration/dateChartSlice";
import { asyncCurrentChartData } from "../../store/integration/currentChartSlice";
import { asyncStateTableData } from "../../store/integration/stateTableSlice";
import { asyncErrorFeedData } from "../../store/integration/errorFeedSlice";

import { asyncSpecChartData } from "../../store/charging/specChartSlice";

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
    dispatch(asyncSpecChartData());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={3}>
        <MapContainer />
      </Grid>
      <Grid item xs={9}>
        <ChartContainer />
      </Grid>
    </Grid>
  );
};

export default Integration;
