import React from "react";

const DetailListBox = ({ data }) => {
  return (
    <div className="detailList__box">
      <h2>{data.chargerName}</h2>
      <div>
        <div>ChargeId</div>
        <div>{data.chargeId}</div>
      </div>
      <div>
        <div>ChargerType</div>
        <div>{data.chargeType}</div>
      </div>
      <div>
        <div>ChargerStatus</div>
        <div>{data.chargerStatus}</div>
      </div>
    </div>
  );
};

export default DetailListBox;
