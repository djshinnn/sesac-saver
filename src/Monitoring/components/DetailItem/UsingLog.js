import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

import SubTitle from "./../FormElements/SubTitle";

const UsingLog = () => {
  const usingLogData = useSelector((state) => state.usingLog.rows);

  return (
    <div className="usingLog">
      <SubTitle name="사용기록" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>회원 ID</TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>시작</TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>종료</TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>요금</TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "bold" }}>사용량</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usingLogData.map((item) => (
              <TableRow
                key={item.userId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ fontSize: "1.5rem" }}>
                  {item.userId}
                </TableCell>
                <TableCell style={{ fontSize: "1.5rem" }}>{item.startDate}</TableCell>
                <TableCell style={{ fontSize: "1.5rem" }}>{item.finish}</TableCell>
                <TableCell style={{ fontSize: "1.5rem" }}>{item.fare}</TableCell>
                <TableCell style={{ fontSize: "1.5rem" }}>{item.chargeAmt}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsingLog;
