import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";
import { asyncMemberCardListData } from "./../../store/memberManagement/memberCardListSlice";

const MemberCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMemberCardListData());
  }, [dispatch]);

  const memberCardList = useSelector((state) => state.memberCardList.rows);

  const columns = [
    { field: "userId", headerName: "회원번호", width: 150 },
    { field: "userName", headerName: "소유자", width: 150 },
    { field: "ownerBirth", headerName: "생년월일", width: 150 },
    { field: "cardName", headerName: "카드명", width: 190 },
    { field: "corp", headerName: "카드사", width: 150 },
    { field: "cardNum", headerName: "카드번호", width: 300 },
    { field: "cvc", headerName: "CVC", width: 100 },
    { field: "expireDate", headerName: "만료기간(MM/YY)", width: 200 },
    { field: "createdAt", headerName: "등록일자", width: 200 },
  ];

  const rows = memberCardList.map((item) => ({
    id: nanoid(),
    userId: item.userId,
    userName: item.userName,
    ownerBirth: item.ownerBirth,
    cardName: item.cardName,
    corp: item.corp,
    cardNum: item.cardNum,
    cvc: item.cvc,
    expireDate: item.expireDate,
    createdAt: item.createdAt,
  }));

  return (
    <div className="member_cardlist">
      <List columns={columns} rows={rows} height={700} page={5} title={"회원 결제 카드 목록"} />
    </div>
  );
};

export default MemberCardList;
