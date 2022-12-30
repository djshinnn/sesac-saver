import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";

const ChargingChart = () => {
  const specChartData = useSelector((state) => state.specChart.rows);

  const month = specChartData.map((item) => `${item.month} 월`);
  const specChargeAmt = specChartData.map((item) => item.chargeAmt);
  const specFare = specChartData.map((item) => item.fare);
  const data = {
    labels: month,
    datasets: [
      {
        type: "bar",
        label: "충전량",
        backgroundColor: "#46649B",
        data: specChargeAmt,
        borderColor: "#46649B",
        borderWidth: 2,
      },
      {
        type: "line",
        fill: origin,
        label: "충전금액",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: specFare,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className="charging_chart">
      <Chart data={data} options={options} />;
    </div>
  );
};

export default ChargingChart;
