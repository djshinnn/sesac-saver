import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import SubTitle from "../FormElements/SubTitle";
import { asyncSpecChartData } from "../../../store/charging/specChartSlice";

const StateTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stateTableData = useSelector((state) => state.stateTable.rows);

  const [pageSize, setPageSize] = useState(5);

  const clickHandler = (e) => {
    dispatch(asyncSpecChartData(e.row.id));
    navigate(`/charging/${e.row.id}`);
  };

  const theme = createTheme({
    components: {
      // toggle text color
      MuiButtonBase: {
        styleOverrides: {
          root: {
            color: "#311b92",
          },
        },
      },
      // toggle text size
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "1.8rem",
          },
        },
      },
      // filter header
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "2rem",
          },
        },
      },
      // filter input
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: "2rem",
          },
        },
      },
      // table pagination
      MuiTablePagination: {
        styleOverrides: {
          selectLabel: {
            fontSize: "1.8rem",
          },
          toolbar: {
            fontSize: "1.8rem",
          },
          menuItem: {
            fontSize: "1.8rem",
          },
          displayedRows: {
            fontSize: "1.8rem",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: "2.5rem",
            height: "2.5rem",
          },
        },
      },
    },
  });

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

      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[1, 2, 3, 5, 10, 15, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          style={{ display: "flex", justifyContent: "center", fontSize: "1.5rem", height: "300px" }}
          onCellClick={clickHandler}
        />
      </ThemeProvider>
    </div>
  );
};

export default StateTable;
