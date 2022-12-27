import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const StateTable = () => {
  const stateTableData = useSelector((state) => state.stateTable.rows);
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { field: "stationId", headerName: "No.", width: 70 },
    { field: "stationName", headerName: "충전소 명", width: 130 },
    { field: "totalChargeAmt", headerName: "누적 충전량", width: 130 },
    { field: "totalFare", headerName: "누적 충전 금액", width: 130 },
    { field: "state", headerName: "(운용가능 기기) / (전체 기기)", width: 250 },
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[1, 2, 3, 5, 10, 15, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </div>
  );
};

export default StateTable;
