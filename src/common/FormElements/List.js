import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Title from "./Title";
import { chargingStationActions } from "../../store/chargingStation/stationListSlice";
import { asyncChargerListData } from "../../store/chargingStation/chargerListSlice";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        // table header
        columnHeaders: {
          backgroundColor: "#000051",
          padding: "1rem",
        },
        columnHeaderTitle: {
          fontSize: "1.8rem",
          color: "white",
          fontWeight: "bold",
        },
        // table row
        row: {
          // Tabe row when Selected
          "&.Mui-selected": {
            backgroundColor: "#e3eefa",
          },
        },
        // table cell
        cell: {
          fontSize: "1.6rem",
          minWidth: "200px",
          minHeight: "52px",
          padding: "2rem",
        },
        selectedRowCount: {
          fontSize: "1.8rem",
        },
      },
    },
    // sort icon
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#a6b9ff",
          width: "2.5rem",
          height: "2.5rem",
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

const List = ({
  rows,
  columns,
  height,
  page,
  title,
  station,
  charger,
  checkboxSelection,
  selectData,
}) => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(page);

  const clickHandler = (e) => {
    // StationList onClick ?????????
    station &&
      dispatch(chargingStationActions.getStationEdit(e.row)) &&
      dispatch(asyncChargerListData(e.row.stationId));

    // ChargerList onClick ?????????
    charger && dispatch(chargingStationActions.getChargerEdit(e.row));

    // remove ?????????
    selectData(e);
  };

  return (
    <div className="list">
      {title && <Title title={title} />}

      <ThemeProvider theme={theme}>
        <DataGrid
          checkboxSelection={checkboxSelection}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          sx={{ height }}
          onCellClick={clickHandler}
        />
      </ThemeProvider>
    </div>
  );
};

export default List;
