import React from "react";
import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DateChart = () => {
  const seoulData = useSelector((state) => state.dateChart.seoulData);
  const filteredData = useSelector((state) => state.dateChart.filteredData);
  const regionPickData = useSelector((state) => state.totalChart.filteredData);

  const regionCodeHandler = () => {
    switch (regionPickData.regionCode[0]) {
      case "su":
        return "서울시";
      case "gg":
        return "경기도";
      case "gw":
        return "강원도";
      case "cb":
        return "충청북도";
      case "cn":
        return "충청남도";
      case "jb":
        return "전라북도";
      case "jn":
        return "전라남도";
      case "gb":
        return "경상북도";
      case "gn":
        return "경상남도";
      case "jj":
        return "제주도";
      default:
        return "서울시";
    }
  };

  const chartData = {
    labels:
      filteredData.chargeAmt.length > 1
        ? [filteredData.yesterday, filteredData.today]
        : [seoulData.yesterday[0], seoulData.today[1]],
    datasets: [
      {
        type: "bar",
        label: `${regionCodeHandler()}`,
        backgroundColor: "blue",
        data:
          filteredData.chargeAmt.length > 1
            ? filteredData.chargeAmt
            : seoulData.chargeAmt,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} style={{ width: "900px", height: "400px" }} />
    </div>
  );
};

export default DateChart;
