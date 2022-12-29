import React from "react";

const ReportComponent = ({ data }) => {
  return (
    <div className="report_container">
      <div className="report_time__box">
        <div className="report_time">{data.date}</div>
        <div className="report_timeLeft">2 hours ago</div>
      </div>
      <div className="report_box">
        <div className="report_box__charger">{data.chargerName}</div>
        <div className="report_box__content">{data.content}</div>
      </div>
    </div>
  );
};

export default ReportComponent;
