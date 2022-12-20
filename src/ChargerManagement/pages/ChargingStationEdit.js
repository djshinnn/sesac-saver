import React from "react";
import StationEditContainer from "../container/StationEditContainer";
import StationMap from "../components/ChargingStationEdit/StationMap";

const ChargingStationEdit = () => {
  return (
    <div>
      <StationEditContainer />
      <StationMap />
    </div>
  );
};

export default ChargingStationEdit;
