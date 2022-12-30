import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { asyncStationListData } from "../../store/chargingStation/stationListSlice";
import { asyncChargerListData } from "../../store/chargingStation/chargerListSlice";
import ChargerContainer from "../container/ChargerContainer";
import StationContainer from "./../container/StationContainer";

const ChargingStation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncStationListData());
    dispatch(asyncChargerListData("BFT32"));
  }, [dispatch]);

  return (
    <div className="charging_station">
      <StationContainer />
      <ChargerContainer />
    </div>
  );
};

export default ChargingStation;
