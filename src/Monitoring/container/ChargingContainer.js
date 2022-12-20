import React from "react";
import ChargingChart from "../components/DetailItem/ChargingChart";
import ChargingState from "../components/DetailItem/ChargingState";
import Spec from "../components/DetailItem/Spec";
import Total from "../components/DetailItem/Total";

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
