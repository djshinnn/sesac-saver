import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../../common/FormElements/List";
import { companiesListActions } from "../../../store/companies/companiesListSlice";

const CompaniesList = () => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.companiesList.rows);

  const rows =
    companiesList &&
    Object.values(companiesList).map((item) => ({
      id: nanoid(),
      companyId: item.companyId,
      companyName: item.companyName,
      contact: item.contact,
      icon: item.icon,
    }));

  const columns = [
    { field: "companyId", headerName: "ID", width: 210 },
    { field: "companyName", headerName: "충전 사업자", width: 250 },
    { field: "contact", headerName: "연락처", width: 250 },
    { field: "icon", headerName: "로고 이미지", width: 295 },
  ];

  const selectData = (e) => {
    dispatch(companiesListActions.selectCompanyId(e.row.companyId));
  };

  return (
    <div className="companies_list">
      <List
        rows={rows ? rows : []}
        columns={columns}
        page={10}
        height={"630px"}
        title={"충전 사업자 목록"}
        selectData={selectData}
        checkboxSelection
      />
    </div>
  );
};

export default CompaniesList;
