import React from "react";

import CurrentChart from "../components/Integration/CurrentChart";
import DateChart from "../components/Integration/DateChart";
import StateTable from "../components/Integration/StateTable";
import TotalChart from "../components/Integration/TotalChart";

const ChartContainer = () => {
  return (
    <div className="chart_container">
      <TotalChart />
      <div className="chart_container__middlechart">
        <DateChart />
        <CurrentChart />
      </div>
      <StateTable />
    </div>
  );
};

export default ChartContainer;
