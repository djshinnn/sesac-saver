import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../../common/FormElements/List";

const StationList = () => {
  const stationList = useSelector((state) => state.stationList);

  const columns = [
    { field: "stationId", headerName: "ID", width: 150 },
    { field: "companyName", headerName: "충전 사업자", width: 200 },
    { field: "region", headerName: "권역", width: 150 },
    { field: "stationName", headerName: "충전소명", width: 200 },
    { field: "address", headerName: "주소", width: 300 },
    { field: "contact", headerName: "연락처", width: 200 },
    { field: "runningTime", headerName: "운영 시간", width: 200 },
    { field: "parkingFee", headerName: "주차 요금", width: 200 },
    { field: "stationStatus", headerName: "운영 여부", width: 150 },
    { field: "chargerAvail", headerName: "사용 가능", width: 150 },
    { field: "chargerTotal", headerName: "전체", width: 150 },
  ];

  const rows = stationList.rows.map((item) => ({
    id: nanoid(),
    stationId: item.stationId,
    companyName: item.companyName,
    region: item.region,
    stationName: item.stationName,
    address: item.address,
    contact: item.contact,
    runningTime: item.runningTime,
    parkingFee: item.parkingFee,
    stationStatus: item.stationStatus,
    chargerAvail: item.chargerAvail,
    chargerTotal: item.chargerTotal,
  }));

  return (
    <div className="station_list">
      <List columns={columns} rows={rows} height={600} page={10} title={"충전소 목록"} station />
    </div>
  );
};

export default StationList;
