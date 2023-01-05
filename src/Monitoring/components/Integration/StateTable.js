import React from "react";
import { useSelector } from "react-redux";

import SubTitle from "../FormElements/SubTitle";
import List from "../../../common/FormElements/List";

const StateTable = () => {
  const stateTableData = useSelector((state) => state.stateTable.rows);

  const columns = [
    { field: "stationId", headerName: "No.", width: 140 },
    { field: "stationName", headerName: "충전소 명", width: 190 },
    { field: "totalChargeAmt", headerName: "누적 충전량", width: 190 },
    { field: "totalFare", headerName: "누적 충전 금액", width: 190 },
    { field: "state", headerName: "(운용가능 기기) / (전체 기기)", width: 280 },
  ];

  const rows = stateTableData.map((item) => ({
    id: item.stationId,
    stationId: item.stationId,
    stationName: item.stationName,
    totalChargeAmt: item.totalChargeAmt,
    totalFare: item.totalFare,
    state: item.state,
  }));

  return (
    <div className="state_table">
      <SubTitle name={"충전소별 상태 및 월 충전 누적량"} />

      <List rows={rows} columns={columns} page={5} height={"290px"} status />
    </div>
  );
};

export default StateTable;
