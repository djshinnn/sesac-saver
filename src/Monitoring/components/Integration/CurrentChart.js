import React from "react";
import { useSelector } from "react-redux";

import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import SubTitle from "../FormElements/SubTitle";

const CurrentChart = () => {
  const currentChartData = useSelector((state) => state.currentChart);

  // doughnut chart
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

  const doughnutOptions = {
    maintainAspectRatio: false,
  };

  // bar chart
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

  const barOptions = {
    maintainAspectRatio: false,
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="current_chart">
      <SubTitle name={"충전소 가동 현황"} />

      <div className="current_chart__box">
        <div className="current_chart__doughnut">
          <Doughnut options={doughnutOptions} data={data} />
          <span>{currentChartData.avg}%</span>
        </div>
        <div className="current_chart__bar">
          <Bar options={barOptions} data={barData} />
        </div>
      </div>
    </div>
  );
};

export default CurrentChart;
