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
        : [seoulData.yesterday, seoulData.today],
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
    <div className="date_chart">
      <Line data={chartData} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>충전량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.yesterday
                : seoulData.yesterday}
            </td>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.chargeAmt[0]
                : seoulData.chargeAmt[0]}
            </td>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.fare[0]
                : seoulData.fare[0]}
            </td>
          </tr>
          <tr>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.today
                : seoulData.today}
            </td>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.chargeAmt[1]
                : seoulData.chargeAmt[1]}
            </td>
            <td>
              {filteredData.chargeAmt.length > 1
                ? filteredData.fare[1]
                : seoulData.fare[1]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DateChart;
