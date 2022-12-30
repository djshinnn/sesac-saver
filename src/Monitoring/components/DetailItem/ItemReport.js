import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import SubTitle from "../FormElements/SubTitle";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ItemReport = () => {
  const itemReportData = useSelector((state) => state.itemReport.rows);
  return (
    <div className="itemReport">
      <SubTitle name="Report" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.5rem" }}>생성일자</TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>문제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemReportData.map((item) => (
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
