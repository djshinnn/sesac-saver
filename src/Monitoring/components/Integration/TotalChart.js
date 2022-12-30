import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { regionCodeHandler } from "../../utils/regionCodeHandler";
import SubTitle from "../FormElements/SubTitle";

const TotalChart = () => {
  const seoulData = useSelector((state) => state.totalChart.seoulAmt);
  const totalData = useSelector((state) => state.totalChart.totalAmt);
  const filteredData = useSelector((state) => state.totalChart.filteredData);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        type: "bar",
        label: "전국 누적량",
        backgroundColor: "rgb(0, 0, 81)",
        data: totalData,
        borderWidth: 2,
      },
      {
        type: "bar",
        label: `${regionCodeHandler(filteredData)} 누적량`,
        backgroundColor: "rgb(75, 192, 192)",
        data: filteredData.amt.length > 1 ? filteredData.amt : seoulData,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="total_chart">
      <h1 className="total_chart__title">운영 현황 - {regionCodeHandler(filteredData)}</h1>
      <SubTitle name={"월별 전체 충전 누적량"} />
      <div className="total_chart__line">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default TotalChart;
