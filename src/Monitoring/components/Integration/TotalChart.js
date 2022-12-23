import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncMonthChartData } from "../../../store/totalChartSlice";

const TotalChart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.totalChart);

  useEffect(() => {
    dispatch(asyncMonthChartData());
  }, []);

  console.log(data);

  return <div>TotalChart</div>;
};

export default TotalChart;
