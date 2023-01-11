import React from "react";
import { useNavigate } from "react-router-dom";

const DetailListBox = ({ data }) => {
  const navigate = useNavigate();
  const chargerId = data.chargerId;

  return (
    <button
      className="detailList__box"
      onClick={() => {
        navigate(`/detailItem/${chargerId}`);
      }}
    >
      <h2>{data.chargerName}</h2>
      <div>
        <div>ChargerId</div>
        <div>{data.chargerId}</div>
      </div>
      <div>
        <div>ChargerType</div>
        <div>{data.chargerType}</div>
      </div>
      <div>
        <div>ChargerStatus</div>
        <div>{data.chargerStatus}</div>
      </div>
    </button>
  );
};

export default DetailListBox;
