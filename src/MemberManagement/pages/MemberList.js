import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// 비동기 함수 (데이터 요청)
import { asyncMemberListData } from "./../../store/memberManagement/memberListSlice";

import List from "../../common/FormElements/List";

const MemberList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMemberListData());
  }, [dispatch]);

  const memberList = useSelector((state) => state.memberList.rows);
  // console.log(memberList);

  const columns = [
    { field: "userId", headerName: "회원번호", width: 150 },
    { field: "userName", headerName: "이름", width: 150 },
    { field: "email", headerName: "이메일", width: 300 },
    { field: "createdAt", headerName: "가입일", width: 150 },
  ];

  const rows = memberList.map((item) => ({
    id: nanoid(),
    userId: item.userId,
    userName: item.userName,
    email: item.email,
    createdAt: item.createdAt,
  }));

  return (
    <div>
      <List columns={columns} rows={rows} height={400} page={5} title={"회원 목록"} />
    </div>
  );
};

export default MemberList;
