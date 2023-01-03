import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncStationHistoryData } from "../../store/stationHistory/stationHistorySlice";

const StationHistory = () => {
  const dispatch = useDispatch();

  const stationHistoryData = useSelector((state) => state.stationHistory);
  console.log(stationHistoryData);

  useEffect(() => {
    dispatch(asyncStationHistoryData());
  }, [dispatch]);

  return <div>StationHistory</div>;
};

export default StationHistory;
