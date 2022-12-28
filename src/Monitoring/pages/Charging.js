import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChargingContainer from "../container/ChargingContainer";
import DetailContainer from "../container/DetailContainer";
import { asyncSpecChartData } from "../../store/specChartSlice";

const Charging = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncSpecChartData());
	});

	return (
		<div>
			<ChargingContainer />
			<DetailContainer />
		</div>
	);
};

export default Charging;
