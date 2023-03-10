import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ChargingState = () => {
  const specChartStatus = useSelector((state) => state.specChart.status);

  const data = {
    labels: ["사용가능", "고장", "사용중"],
    datasets: [
      {
        data: [specChartStatus.avail, specChartStatus.broken, specChartStatus.using],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        display: true,
        color: "#000",
        anchor: "center",
        align: "center",
      },
    },
  };

  return (
    <div className="charging_state">
      <h1>충전기 현황</h1>
      <div className="charging_state_chart">
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default ChargingState;
