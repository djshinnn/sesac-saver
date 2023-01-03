import React from "react";
import { useSelector } from "react-redux";

import List from "../../../common/FormElements/List";
import { nanoid } from "@reduxjs/toolkit";

const ChargerList = () => {
  const chargerList = useSelector((state) => state.chargerList);

  const columns = [
    { field: "chargeId", headerName: "ID", width: 150 },
    { field: "chargerName", headerName: "충전기명", width: 150 },
    { field: "chargerType", headerName: "타입", width: 150 },
    { field: "chargerPower", headerName: "최대 전력", width: 150 },
    { field: "chargerFee", headerName: "요금", width: 150 },
    { field: "install", headerName: "설치날짜", width: 150 },
    { field: "chargerStatus", headerName: "상태", width: 150 },
  ];

  const rows = chargerList.rows.map((item) => ({
    id: nanoid(),
    chargeId: item.chargeId,
    chargerName: item.chargerName,
    chargerType: item.chargerType,
    chargerPower: item.chargerPower,
    chargerFee: item.chargerFee,
    install: item.install,
    chargerStatus: item.chargerStatus,
  }));

  return (
    <div className="charger_list">
      <List columns={columns} rows={rows} height={"500px"} page={10} title={"충전기 목록"} />
    </div>
  );
};

export default ChargerList;
