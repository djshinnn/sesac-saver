import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Title from "../../common/FormElements/Title";
import EditBox from "../../common/FormElements/EditBox";
import BasicButton from "../../common/FormElements/BasicButton";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const NoticeEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Data = [
    { leftText: "제목", rightText: "제목입력" },
    { leftText: "카테고리", option: ["우선 공지", "일반 공지"] },
    { leftText: "내용", minRows: 20 },
  ];

  return (
    <div className="edit">
      <Title title={"공지사항 등록/변경"} />

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
        <div className="imgBox">
          {/* input Img 시작 */}
          <input
            accept="image/png"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />

          <Box sx={{ width: "100%" }}>
            <label htmlFor="select-image">
              <BasicButton text={"Upload Image"} color={"upload"} component="span" />
            </label>
          </Box>
          {selectedImage && (
            <Box mt={2} textAlign="left">
              <div className="img">{selectedImage.name}</div>
            </Box>
          )}
          {/* input Img 끝 */}
        </div>
        <div className="buttonBox">
          <BasicButton color={"delete"} text={"삭제"} />
          <BasicButton color={"store"} text={"저장"} />
        </div>
      </div>
    </div>
  );
};

export default NoticeEdit;
