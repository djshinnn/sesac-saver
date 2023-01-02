import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../../common/FormElements/List";

const CompaniesList = () => {
  const companiesList = useSelector((state) => state.companiesList);

  const rows = companiesList.rows.map((item) => ({
    id: nanoid(),
    companyId: item.companyId,
    companyName: item.companyName,
    contact: item.contact,
    icon: item.icon,
  }));

  const columns = [
    { field: "companyId", headerName: "ID", width: 200 },
    { field: "companyName", headerName: "충전 사업자", width: 200 },
    { field: "contact", headerName: "연락처", width: 250 },
    { field: "icon", headerName: "로고 이미지", width: 200 },
  ];

  return (
    <div className="companies_list">
      <List rows={rows} columns={columns} page={5} height={"370px"} title={"충전 사업자 목록"} />
    </div>
  );
};

export default CompaniesList;
