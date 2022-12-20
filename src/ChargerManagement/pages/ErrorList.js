import React from "react";
import ErrorStatus from "../components/ErrorList/ErrorStatus";
import ErrorDetailList from "../components/ErrorList/ErrorDetailList";

const ErrorList = () => {
  return (
    <div>
      <ErrorStatus />
      <ErrorDetailList />
    </div>
  );
};

export default ErrorList;
