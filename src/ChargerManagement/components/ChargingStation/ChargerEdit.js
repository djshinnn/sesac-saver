import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Title from "../../../common/FormElements/Title";
import Edit from "./FormElements/Edit";

const ChargerEdit = () => {
  const chargerEdit = useSelector((state) => state.stationList.chargerEdit);
  console.log();

  const Data = [
    { leftText: "ID", rightText: chargerEdit.chargeId },
    { leftText: "충전기명", rightText: chargerEdit.chargerName },
    { leftText: "타입", option: [chargerEdit.chargerType, "벽부형", "DC콤보"] },
    { leftText: "최대 전력", rightText: chargerEdit.chargerPower },
    { leftText: "요금", rightText: chargerEdit.chargerFee },
    { leftText: "상태", rightText: chargerEdit.chargerStatus },
  ];

  return (
    <div className="station_edit">
      <Title title={"충전기"} />

      {Data.map((data) => (
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

export default ChargerEdit;
