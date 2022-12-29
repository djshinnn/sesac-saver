import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import ChargingContainer from "../container/ChargingContainer";
import DetailContainer from "../container/DetailContainer";
import { asyncSpecChartData } from "../../store/charging/specChartSlice";
import { asyncDetailListData } from "../../store/charging/detailListSlice";
import { asyncStationReportData } from "../../store/charging/stationReportSlice";

const Charging = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname.split("/").slice(-1).join("");

  useEffect(() => {
    dispatch(asyncDetailListData(pathName));
    dispatch(asyncSpecChartData(pathName));
    dispatch(asyncStationReportData(pathName));
  }, [dispatch, pathName]);

  return (
    <div>
      <ChargingContainer />
      <DetailContainer />
    </div>
  );
};

export default Charging;
