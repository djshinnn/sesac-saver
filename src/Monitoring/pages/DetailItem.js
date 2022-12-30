import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { asyncItemSpec } from "../../store/detailItem/itemSpecSlice";
import { asyncItemReport } from "../../store/detailItem/itemReportSlice";
import { asyncUsingLog } from "../../store/detailItem/usingLogSlice";

import LogContainer from "../container/LogContainer";
import TimeLineContainer from "../container/TimeLineContainer";

const DetailItem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname.split("/").slice(-1).join("");
  console.log(pathName);

  useEffect(() => {
    dispatch(asyncItemSpec(pathName));
    dispatch(asyncItemReport(pathName));
    dispatch(asyncUsingLog(pathName));
  }, [dispatch, pathName]);

  return (
    <div className="detailItem">
      <TimeLineContainer />
      <LogContainer />
    </div>
  );
};

export default DetailItem;
