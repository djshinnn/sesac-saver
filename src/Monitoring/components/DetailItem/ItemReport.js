import React from "react";
import { useSelector } from "react-redux";

const ItemReport = () => {
  const itemReportData = useSelector((state) => state.itemReport.rows);
  return <div>ItemReport</div>;
};

export default ItemReport;
