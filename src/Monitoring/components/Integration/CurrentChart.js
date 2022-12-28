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
        backgroundColor: ["rgba(26, 35, 126, 0.8)", "rgba(226, 226, 226, 0.2)"],
        borderColor: ["rgba(26, 35, 126, 1)", "rgba(226, 226, 226, 1)"],

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
        borderColor: "rgb(83, 75, 174)",
        backgroundColor: "rgba(83, 75, 174, 0.8)",
      },
    ],
  };
  return (
    <div className="current_chart">
      <div className="current_chart__doughnut">
        <Doughnut data={data} />
        <span>{currentChartData.avg}%</span>
      </div>
      <div className="current_chart__bar">
        <Bar options={options} data={barData} />
      </div>
    </div>
  );
};

export default CurrentChart;
