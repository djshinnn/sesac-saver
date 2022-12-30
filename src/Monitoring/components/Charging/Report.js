import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import SubTitle from "../FormElements/SubTitle";
import ReportComponent from "../FormElements/ReportComponent";

const Report = () => {
  const stationReport = useSelector((state) => state.stationReport);

  return (
    <div className="report">
      <SubTitle name={"Report"} width={"500px"} />

      <div>
        {stationReport.rows.map((data) => (
          <ReportComponent key={nanoid()} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Report;
