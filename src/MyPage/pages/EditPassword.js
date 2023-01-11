import React from "react";

import Title from "../../common/FormElements/Title";
import BasicButton from "../../common/FormElements/BasicButton";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const myPageTheme = createTheme({
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
  },
});

const EditPassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showCheckPassword, setShowCheckPassword] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="edit_password">
      <Title title={"비밀번호 수정"} />
      <ThemeProvider theme={myPageTheme}>
        <div className="edit_password__input">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">현재 비밀번호</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showCurrentPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={false}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">신규 비밀번호</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showNewPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={false}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">신규 비밀번호 확인</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showCheckPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowCheckPassword(!showCheckPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showCheckPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={false}
            />
          </FormControl>
          <div className="edit_password__btn">
            <BasicButton color="delete" text="취소" />
            <BasicButton color="store" text="저장" />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default EditPassword;
