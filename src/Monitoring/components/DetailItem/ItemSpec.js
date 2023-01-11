import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";

import SubTitle from "./../FormElements/SubTitle";

const ItemSpec = () => {
  const itemSpecData = useSelector((state) => state.itemSpec.chargerInfo);

  return (
    <div className="item_spec">
      <SubTitle name="Specification" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                충전기 모델명
              </TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>{itemSpecData.chargerId}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>최대전력</TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>{itemSpecData.chargingPower}kW</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>충전속도</TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>{itemSpecData.chargingSpeen}kW/h</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>충전타입</TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>{itemSpecData.chargerType}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ fontSize: "1.5rem", fontWeight: "bold" }}>설치날짜</TableCell>
              <TableCell style={{ fontSize: "1.5rem" }}>{itemSpecData.install}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ItemSpec;
