import React from "react";
import { useSelector } from "react-redux";

import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import SubTitle from "./../FormElements/SubTitle";

const TimeLine = () => {
  const usingLogData = useSelector(state => state.usingLog.rows);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "시간별 충전량",
        data: [], // ?
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
