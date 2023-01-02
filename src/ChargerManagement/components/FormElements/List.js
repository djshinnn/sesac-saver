import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { asyncChargerListData } from "../../../store/chargingStation/chargerListSlice";

import { DataGrid } from "@mui/x-data-grid";

import Title from "./Title";

const List = ({ rows, columns, height, page, title }) => {
  const [pageSize, setPageSize] = useState(page);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(asyncChargerListData(e.row.stationId));
  };

  return (
    <div className="list">
      <Title title={title} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sx={{ fontSize: "1.7rem", height }}
        onCellClick={(e) => clickHandler(e)}
      />
    </div>
  );
};

export default List;
