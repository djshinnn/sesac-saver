import React from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ItemSpec = () => {
  const itemSpecData = useSelector((state) => state.itemSpec.chargerInfo);

  return (
    <div className="item_spec">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>충전기 모델명</TableCell>
              <TableCell>{itemSpecData.chargerId}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>최대전력</TableCell>
              <TableCell>{itemSpecData.chargingPower}kW</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>충전속도</TableCell>
              <TableCell>{itemSpecData.chargingSpeen}kW/h</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>충전타입</TableCell>
              <TableCell>{itemSpecData.chargerType}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>설치날짜</TableCell>
              <TableCell>{itemSpecData.install}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ItemSpec;
