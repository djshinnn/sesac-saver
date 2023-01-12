import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../../firebase/firebase";
import { ref, set, get, child, remove } from "firebase/database";
import { v4 } from "uuid";
import { Box, TextField, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Title from "../../../common/FormElements/Title";
import BasicButton from "../../../common/FormElements/BasicButton";
import { asyncCompaniesListData } from "../../../store/companies/companiesListSlice";

const CompaniesEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [textField, setTextField] = useState({ companyName: "", contact: "" });
  const selectCompanyId = useSelector((state) => state.companiesList.companyId);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setTextField((prev) => ({
      ...prev,
      companyId: v4(),
      [e.target.name]: e.target.value.trim(),
      icon: "sample1.png",
    }));
  };

  // firebase Start

  // Read & Write
  const writeData = () => {
    if (
      !textField.companyName ||
      !textField.contact ||
      /^\s*$/.test(textField.companyName || textField.contact)
    ) {
      return;
    }

    const dbRef = ref(db);
    get(child(dbRef, "companies/rows"))
      .then(() => {
        set(ref(db, `companies/rows/${textField.companyId}`), textField);
        dispatch(asyncCompaniesListData());
        setTextField({ companyName: "", contact: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Remove
  const removeData = async () => {
    selectCompanyId.forEach(async (companyId) => {
      await remove(ref(db, `companies/rows/${companyId}`));
      dispatch(asyncCompaniesListData());
    });
  };

  // firebase End
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
          <TextField
            id="outlined-textarea"
            label="충전 사업자"
            placeholder="입력"
            multiline
            name={"companyName"}
            value={textField.companyName}
            onChange={onChangeHandler}
          />
          <TextField
            id="outlined-textarea"
            label="연락처"
            placeholder="입력"
            multiline
            name={"contact"}
            value={textField.contact}
            onChange={onChangeHandler}
          />
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
            <BasicButton text={"삭제"} color={"delete"} onClick={removeData} />
            <BasicButton text={"신규"} color={"new"} />
            <BasicButton text={"수정"} color={"edit"} />
            <BasicButton text={"저장"} color={"store"} onClick={writeData} />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default CompaniesEdit;
