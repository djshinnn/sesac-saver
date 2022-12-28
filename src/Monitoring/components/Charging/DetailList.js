import React from "react";
import { useSelector } from "react-redux";

import DetailListBox from "../FormElements/DetailListBox";
import SubTitle from "../FormElements/SubTitle";

const DetailList = () => {
  const detailList = useSelector((state) => state.detailList);

  return (
    <div className="detailList">
      <SubTitle name={"충전소 상세"} width={"752px"} />
      <div className="detailList__container">
        {detailList.rows.map((data) => (
          <DetailListBox key={data.chargeId} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DetailList;
