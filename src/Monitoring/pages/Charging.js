import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { asyncDetailListData } from "../../store/charging/detailListSlice";
import ChargingContainer from "../container/ChargingContainer";
import DetailContainer from "../container/DetailContainer";

const Charging = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncDetailListData());
  });

  return (
    <div>
      <ChargingContainer />
      <DetailContainer />
    </div>
  );
};

export default Charging;
