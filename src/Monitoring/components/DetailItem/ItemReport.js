import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import SubTitle from "../FormElements/SubTitle";
import ItemReportComponent from "../FormElements/ItemReportComponent";

const ItemReport = () => {
  const itemReportData = useSelector((state) => state.itemReport.rows);
  return (
    <div>
      <SubTitle name="Report" />
      {itemReportData.map((item) => (
        <ItemReportComponent data={item} key={nanoid()} />
      ))}
    </div>
  );
};

export default ItemReport;
