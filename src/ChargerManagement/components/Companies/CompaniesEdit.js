import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Title from "../../../common/FormElements/Title";
import BasicButton from "../../../common/FormElements/BasicButton";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const CompaniesEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const companiesEditTheme = createTheme({
    typography: {
      fontSize: 18,
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

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="companies_edit">
      <Title title={"충전 사업자"} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <ThemeProvider theme={companiesEditTheme}>
          <TextField id="outlined-textarea" label="충전 사업자" placeholder="입력" multiline />
          <TextField id="outlined-textarea" label="연락처" placeholder="입력" multiline />
        </ThemeProvider>

        {/* input Img 시작 */}
        <input
          accept="image/png"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", margin: "1rem 0" }}>
          <label htmlFor="select-image">
            <BasicButton text={"Upload Image"} color={"upload"} component="span" />
          </label>
        </Box>
        {imageUrl && selectedImage && (
          <Box mt={2} textAlign="center">
            <div className="companies_edit__imgpreview">Image Preview</div>
            <img src={imageUrl} alt={selectedImage.name} width="90%" />
          </Box>
        )}
        {/* input Img 끝 */}

        {/* 삭제, 신규, 수정, 저장 버튼  */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }} mt={3}>
          <Stack spacing={5} direction="row">
            <BasicButton text={"삭제"} color={"delete"} />
            <BasicButton text={"신규"} color={"new"} />
            <BasicButton text={"수정"} color={"edit"} />
            <BasicButton text={"저장"} color={"store"} />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default CompaniesEdit;
