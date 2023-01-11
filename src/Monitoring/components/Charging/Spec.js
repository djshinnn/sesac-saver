import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";

const Spec = () => {
  const specChartInfo = useSelector((state) => state.specChart.info);

  return (
    <div className="spec_table">
      <h1>Specification</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "1.5rem" }}>충전소명</TableCell>
              <TableCell sx={{ fontSize: "1.5rem" }}>{specChartInfo.stationName}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontSize: "1.5rem" }}>주소</TableCell>
              <TableCell sx={{ fontSize: "1.5rem" }}>{specChartInfo.address}kW</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontSize: "1.5rem" }}>충전사업자</TableCell>
              <TableCell sx={{ fontSize: "1.5rem" }}>한국전력공사</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontSize: "1.5rem" }}>연락처</TableCell>
              <TableCell sx={{ fontSize: "1.5rem" }}>{specChartInfo.contact}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontSize: "1.5rem" }}>설치날짜</TableCell>
              <TableCell sx={{ fontSize: "1.5rem" }}>{specChartInfo.install}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Spec;
