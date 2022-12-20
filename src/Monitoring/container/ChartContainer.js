import React from "react";
import CurrentChart from "../components/Integration/CurrentChart";
import DateChart from "../components/Integration/DateChart";
import StateTable from "../components/Integration/StateTable";
import TotalChart from "../components/Integration/TotalChart";

const ChartContainer = () => {
  return (
    <div>
      <TotalChart />
      <DateChart />
      <CurrentChart />
      <StateTable />
    </div>
  );
};

export default ChartContainer;
