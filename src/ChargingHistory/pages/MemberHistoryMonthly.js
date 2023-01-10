import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncMemberHistoryMonthlyData } from "../../store/chargingHistory/memberHistoryMonthlySlice";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";

const MemberHistoryMonthly = () => {
  const dispatch = useDispatch();

  const memberHistoryMonthlyData = useSelector((state) => state.memberHistoryMonthly);

  useEffect(() => {
    dispatch(asyncMemberHistoryMonthlyData());
  }, [dispatch]);

  const columns = [
    { field: "stationName", headerName: "충전소명", width: 690 },
    { field: "month", headerName: "월", width: 300 },
    { field: "chargeAmt", headerName: "충전(kw)", width: 300 },
    { field: "fare", headerName: "금액", width: 300 },
  ];

  const rows = memberHistoryMonthlyData.rows.map((item) => ({
    id: nanoid(),
    stationName: item.stationName,
    month: item.month,
    chargeAmt: item.chargeAmt,
    fare: item.fare,
  }));

  const newObject = {
    id: nanoid(),
    stationName: "합계",
    chargeAmt: memberHistoryMonthlyData.total.totalChargeAmt,
    fare: memberHistoryMonthlyData.total.totalFare,
  };

  const newRows = rows.concat(newObject);
  return (
    <div className="member_history__monthly">
      <List columns={columns} rows={newRows} height={700} page={10} title={"회원 월별 내역"} />
    </div>
  );
};

export default MemberHistoryMonthly;
