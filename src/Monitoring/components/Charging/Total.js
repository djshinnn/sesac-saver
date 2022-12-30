import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Total = () => {
  return (
    <div className="total">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow sx={{ height: "55px" }}>
              <TableCell>월</TableCell>
              <TableCell>합계</TableCell>
            </TableRow>

            <TableRow sx={{ height: "45px" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow sx={{ height: "45px" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow sx={{ height: "45px" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow sx={{ height: "45px" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Total;
