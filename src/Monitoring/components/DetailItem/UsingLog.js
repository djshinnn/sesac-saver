import React from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UsingLog = () => {
  const usingLogData = useSelector(state => state.usingLog.rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>회원 ID</TableCell>
            <TableCell>시작</TableCell>
            <TableCell>종료</TableCell>
            <TableCell>요금</TableCell>
            <TableCell>사용량</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usingLogData.map(item => (
            <TableRow
              key={item.userId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.userId}
              </TableCell>
              <TableCell>{item.startDate}</TableCell>
              <TableCell>{item.finish}</TableCell>
              <TableCell>{item.fare}</TableCell>
              <TableCell>{item.chargeAmt}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsingLog;
