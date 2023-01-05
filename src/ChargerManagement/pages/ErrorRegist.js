import React, { useState } from "react";

import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Title from "../../common/FormElements/Title";

const errorRegistTheme = createTheme({
  typography: {
    fontSize: 20,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "500px !important",
          margin: "0 0 3rem 0",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        hasPopupIcon: {
          padding: "0",
        },
      },
    },
  },
});

const ErrorRegist = () => {
  // 권역
  const regionRows = [
    { label: "서울특별시" },
    { label: "경기도" },
    { label: "강원도" },
    { label: "충청북도" },
    { label: "충청남도" },
    { label: "경상북도" },
    { label: "경상남도" },
    { label: "전라북도" },
    { label: "전라남도" },
    { label: "제주도" },
  ];

  // 충전소
  const stationIdRows = [{ label: "eeee" }];

  // 충전기
  const chargerIdRows = [{ label: "ffff" }];

  // 고장 발생일
  const [createdAt, setCreatedAt] = useState(dayjs().format("YYYY-MM-DD"));

  // 상태
  const errorStatusRows = [{ label: "신고" }, { label: "접수" }, { label: "완료" }];

  const [errorInput, setErrorInput] = useState({
    region: "",
    stationId: "",
    chargerId: "",
    createdAt: createdAt,
    errorStatus: "",
    content: "",
  });

  const innerHandler = (e) => {
    if (e.target.innerText === "") {
      setErrorInput({ ...errorInput, [e.target.id]: e.target.value });
    } else if (e.target.innerText) {
      setErrorInput({ ...errorInput, [e.target.id.split("-")[0]]: e.target.innerText });
    }
  };

  const dateHandler = (e) => {
    setCreatedAt(e);
    setErrorInput({ ...errorInput, ["createdAt"]: e.format("YYYY-MM-DD") });
  };

  return (
    <div className="error_regist">
      <Title title={"충전기 고장 등록"} />
      <div className="error_regist__input">
        <ThemeProvider theme={errorRegistTheme}>
          <Autocomplete
            disablePortal
            disableClearable
            id="region"
            options={regionRows}
            onChange={innerHandler}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="권역" />}
          />

          <Autocomplete
            disablePortal
            disableClearable
            id="stationId"
            options={stationIdRows}
            onChange={innerHandler}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="충전소" />}
          />

          <Autocomplete
            disablePortal
            disableClearable
            id="chargerId"
            options={chargerIdRows}
            onChange={innerHandler}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="충전기" />}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              id="createdAt"
              label="Date desktop"
              inputFormat="YYYY/MM/DD"
              value={createdAt}
              onChange={dateHandler}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => <TextField {...params} label="고장 발생일" />}
            />
          </LocalizationProvider>

          <Autocomplete
            disablePortal
            disableClearable
            id="errorStatus"
            options={errorStatusRows}
            onChange={innerHandler}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="상태" />}
          />

          <TextField
            id="content"
            label="상세내역"
            multiline
            rows={4}
            placeholder="상세내역 입력"
            onChange={innerHandler}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ErrorRegist;
