import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncMemberHistoryData } from "../../store/chargingHistory/memberHistorySlice";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";

const MemberHistory = () => {
  const dispatch = useDispatch();

  const memberHistoryData = useSelector((state) => state.memberHistory);

  useEffect(() => {
    dispatch(asyncMemberHistoryData());
  }, [dispatch]);

  const columns = [
    { field: "stationName", headerName: "충전소명", width: 690 },
    { field: "chargerName", headerName: "충전기", width: 300 },
    { field: "chargeAmt", headerName: "충전(kw)", width: 300 },
    { field: "fare", headerName: "금액", width: 300 },
  ];

  const rows = memberHistoryData.rows.map((item) => ({
    id: nanoid(),
    stationName: item.stationName,
    chargerName: item.chargerName,
    chargeAmt: item.chargeAmt,
    fare: item.fare,
  }));

  const newObject = {
    id: nanoid(),
    stationName: "합계",
    chargeAmt: memberHistoryData.total.totalChargeAmt,
    fare: memberHistoryData.total.totalFare,
  };

  const newRows = rows.concat(newObject);
  return (
    <div className="member_history">
      <List columns={columns} rows={newRows} height={700} page={10} title={"회원 기간별 내역"} />
    </div>
  );
};

export default MemberHistory;
