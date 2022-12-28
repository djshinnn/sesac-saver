import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { asyncItemSpec } from "../../store/detailItem/itemSpecSlice";
import { asyncItemReport } from "../../store/detailItem/itemReportSlice";

import LogContainer from "../container/LogContainer";
import TimeLineContainer from "../container/TimeLineContainer";

const DetailItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncItemSpec());
    dispatch(asyncItemReport());
  }, [dispatch]);

  return (
    <div>
      <TimeLineContainer />
      <LogContainer />
    </div>
  );
};

export default DetailItem;
