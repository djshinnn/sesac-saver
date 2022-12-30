import React from "react";

const ItemReportComponent = ({ data }) => {
  return (
    <div>
      <div className="itemreport_container">
        <div className="itemreport_time__box">
          <div>{data.createdAt.slice(0, 10)}</div>
          <div>{data.createdAt.slice(-5)}</div>
        </div>
        <div className="itemreport_box">{data.content}</div>
      </div>
    </div>
  );
};

export default ItemReportComponent;
