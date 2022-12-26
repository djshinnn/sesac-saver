import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const CurrentChart = () => {
	const currentChartData = useSelector((state) => state.currentChart);
	console.log(currentChartData);
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				data: [currentChartData.avg, 100 - currentChartData.avg],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],

				borderWidth: 1,
			},
		],
	};
	const options = {
		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
	};

	const labels = currentChartData.rows.map((item) => item.station);

	const stationRate = currentChartData.rows.map((item) => item.rate);

	console.log(stationRate);

	const data2 = {
		labels,
		datasets: [
			{
				label: "가동률",
				data: stationRate,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};
	return (
		<div>
			<Doughnut data={data} />
			<Bar options={options} data={data2} />
		</div>
	);
};

export default CurrentChart;
