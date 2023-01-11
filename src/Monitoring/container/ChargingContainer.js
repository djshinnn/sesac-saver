import React from "react";

import ChargingChart from "../components/Charging/ChargingChart";
import ChargingState from "../components/Charging/ChargingState";
import Spec from "../components/Charging/Spec";
import Total from "../components/Charging/Total";

const ChargingContainer = () => {
  return (
    <div className="charging_container">
      <div className="charging_container__top">
        <Spec />
        <ChargingState />
      </div>
      <div className="charging_container__bottom">
        <ChargingChart />
        <Total />
      </div>
    </div>
  );
};

export default ChargingContainer;
