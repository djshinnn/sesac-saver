import React from "react";
import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const TotalChart = () => {
  const seoulData = useSelector((state) => state.totalChart.seoulAmt);
  const totalData = useSelector((state) => state.totalChart.totalAmt);
  const filteredData = useSelector((state) => state.totalChart.filteredData);

  const regionCodeHandler = () => {
    switch (filteredData.regionCode[0]) {
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
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "bar",
        label: "전국 누적량",
        backgroundColor: "rgb(255, 99, 132)",
        data: totalData,
        borderColor: "red",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: `${regionCodeHandler()} 누적량`,
        backgroundColor: "rgb(75, 192, 192)",
        data: filteredData.amt.length > 1 ? filteredData.amt : seoulData,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} style={{ width: "900px", height: "400px" }} />
    </div>
  );
};

export default TotalChart;
