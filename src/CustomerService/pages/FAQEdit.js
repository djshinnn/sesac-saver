import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Title from "../../common/FormElements/Title";
import EditBox from "../../common/FormElements/EditBox";
import BasicButton from "../../common/FormElements/BasicButton";
import Box from "@mui/material/Box";

const FAQEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Data = [
    { leftText: "제목", rightText: "제목입력" },
    { leftText: "분류", option: ["로그인 관련", "결제 관련", "충전기 관련"] },
    { leftText: "내용", minRows: 20 },
  ];
  return (
    <div className="edit">
      <Title title={"FAQ 등록/변경"} />

      {Data.map((data) => (
        <EditBox
          key={nanoid()}
          leftText={data.leftText}
          rightText={data.rightText}
          option={data.option}
          minRows={data.minRows}
        />
      ))}

      <div className="box_wrapper">
        {/* input Img 시작 */}
        <div className="imgBox">
          <input
            accept="image/png"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />

          <Box sx={{ width: "100%" }}>
            <label htmlFor="select-image">
              <BasicButton text={"Upload Image"} color={"store"} component="span" />
            </label>
          </Box>
          {selectedImage && (
            <Box mt={2} textAlign="center">
              <div>{selectedImage.name}</div>
            </Box>
          )}
        </div>
        {/* input Img 끝 */}
        <div className="buttonBox">
          <BasicButton text={"삭제"} />
          <BasicButton text={"저장"} />
        </div>
      </div>
    </div>
  );
};

export default FAQEdit;
