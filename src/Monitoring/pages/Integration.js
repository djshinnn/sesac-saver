import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

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

<<<<<<< HEAD
	useEffect(() => {
		dispatch(asyncMonthChartData());
		dispatch(asyncDateChartData());
		dispatch(asyncCurrentChartData());
		dispatch(asyncStateTableData());
		dispatch(asyncErrorFeedData());
		dispatch(asyncSpecChartData());
	}, [dispatch]);
=======
  useEffect(() => {
    dispatch(asyncMonthChartData());
    dispatch(asyncDateChartData());
    dispatch(asyncCurrentChartData());
    dispatch(asyncStateTableData());
    dispatch(asyncErrorFeedData());
  }, [dispatch]);
>>>>>>> 154934df7ec03ce746984e7c78c9b64307260c79

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
