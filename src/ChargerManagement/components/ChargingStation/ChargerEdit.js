import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Title from "../../../common/FormElements/Title";

const ChargerEdit = () => {
  // function BasicSelect() {
  // //   const [age, setAge] = React.useState("");

  // //   const handleChange = (event) => {
  // //     setAge(event.target.value);
  // //   };
  // // }
  return (
    <div className="charger_edit">
      <Title title={"충전기"} />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-textarea" label="ID" placeholder="입력" multiline />
        <TextField id="outlined-textarea" label="충전기 명" placeholder="입력" multiline />
        {/* select */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">타입</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="타입"
            // onChange={handleChange}
          >
            <MenuItem value={10}>DC콤보</MenuItem>
            <MenuItem value={20}>스토퍼</MenuItem>
            <MenuItem value={30}>벽부형</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-textarea" label="최대전력" placeholder="입력" multiline />
        <TextField id="outlined-textarea" label="요금" placeholder="입력" multiline />
        <TextField id="outlined-textarea" label="설치 날짜" placeholder="입력" multiline />
        <TextField id="outlined-textarea" label="상태" placeholder="입력" multiline />
      </Box>
      <Button variant="outlined">삭제</Button>
      <Button variant="outlined">신규</Button>
      <Button variant="outlined">저장</Button>
    </div>
  );
};
export default ChargerEdit;
