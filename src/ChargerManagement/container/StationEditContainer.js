import React from "react";
import StationEdit from "../components/ChargingStationEdit/StationEdit";
import ChargerEdit from "../components/ChargingStationEdit/ChargerEdit";

const StationEditContainer = () => {
  return (
    <div>
      <StationEdit />
      <ChargerEdit />
    </div>
  );
};

export default StationEditContainer;
