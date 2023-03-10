import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import SubTitle from "../FormElements/SubTitle";

const Report = () => {
  const stationReport = useSelector((state) => state.stationReport);

  return (
    <div className="report">
      <SubTitle name={"Report"} width={"500px"} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>생성일자</TableCell>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>문제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stationReport.rows.map((item) => (
              <TableRow key={nanoid()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" style={{ fontSize: "1.5rem" }}>
                  {item.date}
                </TableCell>
                <TableCell style={{ fontSize: "1.5rem" }}>{item.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Report;
