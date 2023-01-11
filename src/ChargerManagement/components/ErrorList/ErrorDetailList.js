import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../../common/FormElements/List";

const ErrorDetailList = () => {
  const errorDetailList = useSelector((state) => state.errorList.rows);

  const columns = [
    { field: "region", headerName: "권역", width: 200 },
    { field: "stationName", headerName: "충전소 명", width: 390 },
    { field: "chargerName", headerName: "충전기 명", width: 200 },
    { field: "errorStatus", headerName: "조치 상황", width: 200 },
    { field: "createdAt", headerName: "신고", width: 200 },
    { field: "receivedDate", headerName: "접수", width: 200 },
    { field: "completedDate", headerName: "완료", width: 200 },
  ];

  const rows = errorDetailList.map((item) => ({
    id: nanoid(),
    region: item.region,
    stationName: item.stationName,
    chargerName: item.chargerName,
    errorStatus: item.errorStatus,
    createdAt: item.createdAt,
    receivedDate: item.receivedDate,
    completedDate: item.completedDate,
  }));

  return (
    <div className="error_detail__list">
      <List columns={columns} rows={rows} height={500} page={10} title={"충전기 고장 목록"} />
    </div>
  );
};

export default ErrorDetailList;
