import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { asyncErrorList } from "../../store/errorList/errorListSlice";

import ErrorStatus from "../components/ErrorList/ErrorStatus";
import ErrorDetailList from "../components/ErrorList/ErrorDetailList";

const ErrorList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncErrorList());
  }, [dispatch]);

  return (
    <div>
      <ErrorStatus />
      <ErrorDetailList />
    </div>
  );
};

export default ErrorList;
