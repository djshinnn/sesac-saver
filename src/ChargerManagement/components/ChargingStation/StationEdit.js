import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Title from "../../../common/FormElements/Title";
import Edit from "./FormElements/Edit";

const StationEdit = () => {
  const stationEdit = useSelector((state) => state.stationList.stationEdit);

  const stationEditData = [
    { leftText: "ID", rightText: stationEdit.stationId },
    { leftText: "충전사업자", option: ["한국전력공사", "더와트", "스타코프"] },
    { leftText: "권역", option: ["서울특별시", "경상남도", "대전광역시"] },
    { leftText: "충전소 명", rightText: stationEdit.stationName },
    { leftText: "주소", rightText: stationEdit.address },
    { leftText: "연락처", rightText: stationEdit.contact },
    { leftText: "운영 시간", rightText: stationEdit.runningTime },
    { leftText: "주차 요금", rightText: stationEdit.parkingFee },
    { leftText: "운영 여부", option: [stationEdit.stationStatus] },
  ];

  return (
    <div className="station_edit">
      <Title title={"충전소"} />

      {stationEditData.map((data) => (
        <Edit
          key={nanoid()}
          leftText={data.leftText}
          rightText={data.rightText}
          option={data.option}
        />
      ))}
    </div>
  );
};

export default StationEdit;
