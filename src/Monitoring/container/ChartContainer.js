import React from "react";
import Grid from "@mui/material/Grid";

import CurrentChart from "../components/Integration/CurrentChart";
import DateChart from "../components/Integration/DateChart";
import StateTable from "../components/Integration/StateTable";
import TotalChart from "../components/Integration/TotalChart";

const ChartContainer = () => {
	return (
		<Grid container className='chart_container'>
			<Grid item xs={12}>
				<TotalChart />
			</Grid>
			<Grid item xs={12} sx={{ display: "flex" }}>
				<Grid item xs={6}>
					<DateChart />
				</Grid>
				<Grid item xs={6}>
					<CurrentChart />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<StateTable />
			</Grid>
		</Grid>
	);
};

export default ChartContainer;
