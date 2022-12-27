import React from "react";
import { useSelector } from "react-redux";

// chart
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CurrentChart = () => {
  const currentChartData = useSelector((state) => state.currentChart);
  const data = {
    labels: ["가동률 평균"],
    datasets: [
      {
        data: [currentChartData.avg, 100 - currentChartData.avg],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],

        borderWidth: 1,
      },
    ],
  };

  // bar chart
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
  const barData = {
    labels,
    datasets: [
      {
        label: "각 충전소별 가동률",
        data: stationRate,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="current_chart">
      <Doughnut data={data} />
      <Bar options={options} data={barData} />
    </div>
  );
};

export default CurrentChart;
