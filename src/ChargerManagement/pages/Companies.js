import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CompaniesList from "../components/Companies/CompaniesList";
import CompaniesEdit from "../components/Companies/CompaniesEdit";
import { asyncCompaniesListData } from "../../store/companies/companiesListSlice";

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
