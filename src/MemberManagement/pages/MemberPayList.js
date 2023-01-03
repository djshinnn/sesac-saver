import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// 비동기 함수 (데이터 요청)
import { asyncMemberPayListData } from "./../../store/memberManagement/memberPayListSlice";

import List from "../../common/FormElements/List";

const MemberPayList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMemberPayListData());
  }, [dispatch]);

  const memberPayList = useSelector((state) => state.memberPayList.rows);
  console.log(memberPayList);

  const columns = [
    { field: "userId", headerName: "회원번호", width: 150 },
    { field: "chargerId", headerName: "충전기ID", width: 200 },
    { field: "cardNum", headerName: "카드 번호", width: 250 },
    { field: "startTime", headerName: "시작 시간", width: 200 },
    { field: "finishTime", headerName: "종료 시간", width: 150 },
    { field: "chargeAmt", headerName: "충전량", width: 150 },
    { field: "fare", headerName: "금액", width: 150 },
    { field: "createdAt", headerName: "결제 일자", width: 200 },
  ];

  const rows = memberPayList.map((item) => ({
    id: nanoid(),
    userId: item.userId,
    chargerId: item.chargerId,
    cardNum: item.cardNum,
    startTime: item.startTime,
    finishTime: item.finishTime,
    chargeAmt: item.chargeAmt,
    fare: item.fare,
    createdAt: item.createdAt,
  }));

  return (
    <div>
      <List columns={columns} rows={rows} height={400} page={5} title={"회원 결제 내역"} />
    </div>
  );
};

export default MemberPayList;
