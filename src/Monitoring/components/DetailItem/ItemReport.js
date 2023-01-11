import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

import SubTitle from "../FormElements/SubTitle";

const ItemReport = () => {
  const itemReportData = useSelector((state) => state.itemReport);
  return (
    <div className="itemReport">
      <SubTitle name="Report" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>생성일자</TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>문제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemReportData.rows.map((item) => (
              <TableRow key={nanoid()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" style={{ fontSize: "1.5rem" }}>
                  {item.createdAt}
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

export default ItemReport;
