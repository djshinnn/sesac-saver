import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ChargerContainer from "../container/ChargerContainer";
import StationContainer from "./../container/StationContainer";
import { asyncStationListData } from "../../store/chargingStation/stationListSlice";

const ChargingStation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncStationListData());
    // asyncChargerListData의 경우 station이 선택될 때 부르기 위해 common 폴더의 List 컴포넌트에서 처리
  }, [dispatch]);

  return (
    <div className="charging_station">
      <StationContainer />
      <ChargerContainer />
    </div>
  );
};

export default ChargingStation;
