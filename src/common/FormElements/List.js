import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

import { chargingStationActions } from "../../store/chargingStation/stationListSlice";
import { asyncChargerListData } from "../../store/chargingStation/chargerListSlice";
import Title from "./Title";

const List = ({ rows, columns, height, page, title, station }) => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(page);

  const clickHandler = (e) => {
    station
      ? dispatch(chargingStationActions.getStationEdit(e.row))
      : dispatch(chargingStationActions.getChargerEdit(e.row));
    station && dispatch(asyncChargerListData(e.row.stationId));
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
        onCellClick={clickHandler}
      />
    </div>
  );
};

export default List;
