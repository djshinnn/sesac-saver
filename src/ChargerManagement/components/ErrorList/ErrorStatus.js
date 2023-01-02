import React from "react";
import { useSelector } from "react-redux";

// import { nanoid } from "@reduxjs/toolkit";

const ErrorStatus = () => {
  const errorStatusData = useSelector((state) => state.errorList);
  console.log(errorStatusData);

  return <div>ErrorStatus</div>;
};

export default ErrorStatus;
