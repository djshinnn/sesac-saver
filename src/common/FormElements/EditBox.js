import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const editTheme = createTheme({
  typography: {
    fontSize: 20,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          margin: "0 0 1rem 0",
        },
      },
    },
  },
});

const Edit = ({ leftText, rightText, option, minRows }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={editTheme}>
        {option ? (
          <div className="edit__box">
            <div className="edit__box--left">{leftText}</div>

            <Box className="edit__box--right">
              <FormControl fullWidth>
                <InputLabel>{leftText}</InputLabel>
                <Select value={value} label="Value" onChange={handleChange}>
                  {option.map((item) => (
                    <MenuItem key={nanoid()} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        ) : (
          <div className="edit__box">
            <div className="edit__box--left">{leftText}</div>
            <TextField
              className="edit__box--right"
              placeholder={rightText}
              multiline
              minRows={minRows}
            />
          </div>
        )}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Edit;
