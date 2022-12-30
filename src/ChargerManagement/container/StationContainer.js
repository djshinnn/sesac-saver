import React from "react";
import StationList from "../components/ChargingStation/StationList";
import StationEdit from "../components/ChargingStation/StationEdit";

const StationContainer = () => {
  return (
    <div>
      <StationList />
      <StationEdit />
    </div>
  );
};

export default StationContainer;
