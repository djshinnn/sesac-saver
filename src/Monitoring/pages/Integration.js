import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

// 비동기 함수 (데이터 요청)
import { asyncMonthChartData } from "../../../store/totalChartSlice";
import { asyncDateChartData } from "../../../store/dateChartSlice";
import { asyncCurrentChartData } from "../../../store/currentChartSlice";
import { asyncStateTableData } from "../../../store/stateTableSlice";
import { asyncErrorFeedData } from "../../../store/errorFeedSlice";

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
