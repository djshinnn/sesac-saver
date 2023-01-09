import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncStationHistoryData } from "../../store/chargingHistory/stationHistorySlice";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";

const StationHistory = () => {
  const dispatch = useDispatch();

  const stationHistoryData = useSelector((state) => state.stationHistory);

  useEffect(() => {
    dispatch(asyncStationHistoryData());
  }, [dispatch]);

  const columns = [
    { field: "stationName", headerName: "충전소명", width: 690 },
    { field: "chargerName", headerName: "충전기", width: 300 },
    { field: "chargeAmt", headerName: "충전(kw)", width: 300 },
    { field: "fare", headerName: "금액", width: 300 },
  ];

  const rows = stationHistoryData.rows.map((item) => ({
    id: nanoid(),
    stationName: item.stationName,
    chargerName: item.chargerName,
    chargeAmt: item.chargeAmt,
    fare: item.fare,
  }));

  const newObject = {
    id: nanoid(),
    stationName: "합계",
    chargeAmt: stationHistoryData.total.totalChargeAmt,
    fare: stationHistoryData.total.totalFare,
  };

  const newRows = rows.concat(newObject);

  return (
    <div className="station_history">
      <List columns={columns} rows={newRows} height={700} page={10} title={"충전소 기간별 목록"} />
    </div>
  );
};

export default StationHistory;
