import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";
import { asyncNoticeData } from "../../store/customerService/noticeSlice";

const Notice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncNoticeData());
  }, [dispatch]);

  const notice = useSelector((state) => state.notice.notice);
  console.log(notice);

  const columns = [
    { field: "tag", headerName: "태그", width: 200 },
    { field: "title", headerName: "제목", width: 890 },
    { field: "createdAt", headerName: "작성일", width: 500 },
  ];

  const rows = notice.map((item) => ({
    id: nanoid(),
    tag: item.tag,
    title: item.title,
    createdAt: item.createdAt,
  }));

  return (
    <div className="notice">
      <List columns={columns} rows={rows} height={800} page={20} title={"공지사항"} />
    </div>
  );
};

export default Notice;
