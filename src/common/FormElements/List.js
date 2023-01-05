import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { chargingStationActions } from "../../store/chargingStation/stationListSlice";
import { asyncChargerListData } from "../../store/chargingStation/chargerListSlice";
import Title from "./Title";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        // table header
        columnHeaders: {
          backgroundColor: "#000051",
          padding: "1rem",
        },
        columnHeader: {},
        columnHeaderTitle: {
          fontSize: "2rem",
          color: "white",
          fontWeight: "bold",
        },
        // table row
        row: {
          // Tabe row when Selected
          "&.Mui-selected": {
            backgroundColor: "#d1c8ec",
          },
        },
        // table cell
        cell: {
          fontSize: "1.8rem",
          minWidth: "200px",
          minHeight: "52px",
          padding: "2rem",
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
  },
});

const List = ({ rows, columns, height, page, title, station, charger }) => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(page);

  const clickHandler = (e) => {
    // StationList onClick 이벤트
    station &&
      dispatch(chargingStationActions.getStationEdit(e.row)) &&
      dispatch(asyncChargerListData(e.row.stationId));

    // ChargerList onClick 이벤트
    charger && dispatch(chargingStationActions.getChargerEdit(e.row));
  };

  return (
    <div className="list">
      {title && <Title title={title} />}

      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          sx={{ fontSize: "1.7rem", height }}
          onCellClick={clickHandler}
        />
      </ThemeProvider>
    </div>
  );
};

export default List;
