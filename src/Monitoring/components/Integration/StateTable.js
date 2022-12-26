import React from "react";
import { useSelector } from "react-redux";
import stateTableSlice from "./../../../store/stateTableSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StateTable = () => {
  const stateTableData = useSelector(state => state.stateTable.rows);
  console.log(stateTableData);

  // state: "3/7",
  // stationId: "BFT33",
  // stationName: "제2공영주차장",
  // totalChargeAmt: "1234",
  // totalFare: "329000"

  return (
    <div>
      <Box sx={{}}>
        <TextField fullWidth label="충전소 검색" />
      </Box>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>충전소 명</th>
            <th>누적 충전량</th>
            <th>누적 충전 금액</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {stateTableData.map(item => (
            <tr key={item.stationId}>
              <td>{item.stationId}</td>
              <td>{item.stationName}</td>
              <td>{item.totalChargeAmt}</td>
              <td>{item.totalFare}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateTable;
