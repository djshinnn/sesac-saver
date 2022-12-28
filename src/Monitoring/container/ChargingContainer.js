import React from "react";
import ChargingChart from "../components/Charging/ChargingChart";
import ChargingState from "../components/Charging/ChargingState";
import Spec from "../components/Charging/Spec";
import Total from "../components/Charging/Total";

const ChargingContainer = () => {
  return (
    <div>
      <Spec />
      <ChargingState />
      <ChargingChart />
      <Total />
    </div>
  );
};

export default ChargingContainer;
