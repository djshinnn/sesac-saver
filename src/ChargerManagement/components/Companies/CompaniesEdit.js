import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Title from "../FormElements/Title";

const CompaniesEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="companies_edit">
      <Title title={"충전 사업자"} />

      {/* <div className="companies_edit__container"> */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-textarea" label="충전 사업자" placeholder="입력" multiline />
        <TextField id="outlined-textarea" label="연락처" placeholder="입력" multiline />

        {/* input Img 시작 */}
        <input
          accept="image/png"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
        {imageUrl && selectedImage && (
          <Box mt={2} textAlign="center">
            <div>Image Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} height="100px" />
          </Box>
        )}
        {/* input Img 끝 */}
      </Box>
    </div>
  );
};

export default CompaniesEdit;
