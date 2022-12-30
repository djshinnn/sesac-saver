import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";

import { asyncSpecChartData } from "../../../store/charging/specChartSlice";
import SubTitle from "../FormElements/SubTitle";

const StateTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stateTableData = useSelector((state) => state.stateTable.rows);

  const [pageSize, setPageSize] = useState(5);

  const clickHandler = (e) => {
    // const station = stateTableData.find(
    //   (station) => station.stationId === e.row.id
    // );
    dispatch(asyncSpecChartData(e.row.id));

    navigate(`/charging/${e.row.id}`);
  };

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

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[1, 2, 3, 5, 10, 15, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        style={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}
        onCellClick={clickHandler}
      />
    </div>
  );
};

export default StateTable;
