import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";
import { asyncStationHistoryMonthlyData } from "../../store/chargingHistory/stationHistoryMonthlySlice";

const StationHistoryMonthly = () => {
  const dispatch = useDispatch();

  const stationHistoryMonthlyData = useSelector((state) => state.stationHistoryMonthly);

  useEffect(() => {
    dispatch(asyncStationHistoryMonthlyData());
  }, [dispatch]);

  const columns = [
    { field: "stationName", headerName: "충전소명", width: 690 },
    { field: "month", headerName: "월", width: 300 },
    { field: "chargeAmt", headerName: "충전(kw)", width: 300 },
    { field: "fare", headerName: "금액", width: 300 },
  ];

  const rows = stationHistoryMonthlyData.rows.map((item) => ({
    id: nanoid(),
    stationName: item.stationName,
    month: item.month,
    chargeAmt: item.chargeAmt,
    fare: item.fare,
  }));
  const newObject = {
    id: nanoid(),
    stationName: "합계",
    chargeAmt: stationHistoryMonthlyData.total.totalChargeAmt,
    fare: stationHistoryMonthlyData.total.totalFare,
  };

  const newRows = rows.concat(newObject);

  return (
    <div className="station_history__monthly">
      <List columns={columns} rows={newRows} height={700} page={10} title={"충전소 월별 내역"} />
    </div>
  );
};

export default StationHistoryMonthly;
