import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ErrorStatus = () => {
  const errorStatusData = useSelector((state) => state.errorList.overall);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000051",
      color: theme.palette.common.white,
      fontSize: "1.8rem",
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: "white",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
  }));

  const toDayTitle = dayjs().format("YYYY-MM-DD");
  const dayOfWeek = dayjs().locale("ko").format("ddd");

  const rows = [
    {
      id: nanoid(),
      total: errorStatusData.total,
      reported: errorStatusData.reported,
      received: errorStatusData.received,
      completed: errorStatusData.completed,
    },
  ];

  return (
    <div className="error-status">
      <div className="error-status__title">
        {toDayTitle} ({dayOfWeek})
      </div>
      <div className="error-status__table">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">전체 건수</StyledTableCell>
                <StyledTableCell align="center">신고 건수</StyledTableCell>
                <StyledTableCell align="center">접수 건수</StyledTableCell>
                <StyledTableCell align="center">완료 건수</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <StyledTableCell align="center">{row.total}</StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "red" }}>
                    {row.reported}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "orange" }}>
                    {row.received}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "green" }}>
                    {row.completed}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ErrorStatus;
