import React from "react";
import ChargerList from "../components/ChargingStation/ChargerList";
import ChargerEdit from "../components/ChargingStation/ChargerEdit";

const ChargerContainer = () => {
  return (
    <div className="charger_container">
      <ChargerList />
      <ChargerEdit />
    </div>
  );
};

export default ChargerContainer;
