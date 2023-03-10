import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";
import { asyncMemberListData } from "./../../store/memberManagement/memberListSlice";

const MemberList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMemberListData());
  }, [dispatch]);

  const memberList = useSelector((state) => state.memberList.rows);

  const columns = [
    { field: "userId", headerName: "회원번호", width: 200 },
    { field: "userName", headerName: "이름", width: 200 },
    { field: "email", headerName: "이메일", width: 890 },
    { field: "createdAt", headerName: "가입일", width: 300 },
  ];

  const rows = memberList.map((item) => ({
    id: nanoid(),
    userId: item.userId,
    userName: item.userName,
    email: item.email,
    createdAt: item.createdAt,
  }));

  return (
    <div className="member_list">
      <List columns={columns} rows={rows} height={700} page={5} title={"회원 목록"} />
    </div>
  );
};

export default MemberList;
