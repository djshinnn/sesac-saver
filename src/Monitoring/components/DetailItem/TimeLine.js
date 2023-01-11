import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";

import SubTitle from "./../FormElements/SubTitle";

const TimeLine = () => {
  const usingLogData = useSelector((state) => state.usingLog.rows);
  const logData = usingLogData.map((item) => item.chargeAmt);
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = ["08:00", "16:00", "24:00"];

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        fill: origin,
        label: "시간별 충전량",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        data: logData,
        tension: 0.5,
      },
    ],
  };
  return (
    <div className="timeLine">
      <SubTitle name="타임라인 그래프" />
      <Line options={options} data={data} />
    </div>
  );
};

export default TimeLine;
