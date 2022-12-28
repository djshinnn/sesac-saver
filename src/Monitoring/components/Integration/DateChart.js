import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { regionCodeHandler } from "../../utils/regionCodeHandler";
import SubTitle from "../FormElements/SubTitle";

const DateChart = () => {
  const seoulData = useSelector((state) => state.dateChart.seoulData);
  const filteredData = useSelector((state) => state.dateChart.filteredData);
  const regionPickData = useSelector((state) => state.totalChart.filteredData);

  const chartData = {
    labels:
      filteredData.chargeAmt.length > 1
        ? [filteredData.yesterday, filteredData.today]
        : [seoulData.yesterday, seoulData.today],
    datasets: [
      {
        type: "bar",
        label: `${regionCodeHandler(regionPickData)}`,
        barThickness: 30,
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
      <SubTitle name={"전일/당일 충전량 및 충전액"} />

      <div className="date_chart__box">
        <div className="date_chart__line">
          <Line data={chartData} />
        </div>
        <table className="date_chart__table">
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
                  : seoulData.chargeAmt[0]}{" "}
                KW
              </td>
              <td>
                &#8361;{" "}
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
                  : seoulData.chargeAmt[1]}{" "}
                KW
              </td>
              <td>
                &#8361;{" "}
                {filteredData.chargeAmt.length > 1
                  ? filteredData.fare[1]
                  : seoulData.fare[1]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DateChart;
