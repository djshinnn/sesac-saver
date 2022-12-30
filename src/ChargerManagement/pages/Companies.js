import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { asyncCompaniesListData } from "../../store/companies/companiesListSlice";
import CompaniesList from "../components/Companies/CompaniesList";
import CompaniesEdit from "../components/Companies/CompaniesEdit";

const Companies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCompaniesListData());
  }, [dispatch]);

  return (
    <div className="companies">
      <CompaniesList />
      <CompaniesEdit />
    </div>
  );
};

export default Companies;
