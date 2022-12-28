import React from "react";
import { useSelector } from "react-redux";

import SubTitle from "../FormElements/SubTitle";

const ItemReport = () => {
  const itemReportData = useSelector((state) => state.itemReport.rows);
  return (
    <div>
      <SubTitle name="Report" />
      {itemReportData.map((item) => (
        <div key={item.createdAt}>
          <div>{item.createdAt}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemReport;
