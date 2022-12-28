import React from "react";
import DetailList from "../components/Charging/DetailList";
import Report from "../components/Charging/Report";

const DetailContainer = () => {
  return (
    <div className="detail_container">
      <DetailList />
      <Report />
    </div>
  );
};

export default DetailContainer;
