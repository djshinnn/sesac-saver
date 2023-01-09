import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";

// reducers
import { totalChartActions } from "../../../store/integration/totalChartSlice";
import { dateChartActions } from "../../../store/integration/dateChartSlice";

import { mapChangeHandler } from "../../utils/mapChangeHandler";
import { mapData } from "../../utils/mapData";

const Map = () => {
  const dispatch = useDispatch();

  const regionCode = useSelector((state) => state.totalChart.filteredData.regionCode)[0];
  const totalData = useSelector((state) => state.totalChart.rows);
  const dateTotalData = useSelector((state) => state.dateChart.rows);

  const clickHandler = (e) => {
    e.preventDefault();

    const filteredData = totalData.filter((data) => data.regionCode === e.target.title);

    // Total Chart dispatch 변수
    const regionCode = filteredData.map((amt) => amt.regionCode);
    const amt = filteredData.map((amt) => amt.chargeAmt);

    // date Chart dispatch 변수
    const filteredDateData = dateTotalData.filter((data) => data.regionCode === e.target.title);
    const chargeAmt = filteredDateData.map((item) => item.chargeAmt);
    const fare = filteredDateData.map((item) => item.fare);
    const yesterday = filteredDateData.map((item) => item.yesterday);
    const today = filteredDateData.map((item) => item.today);

    // dispatch
    dispatch(totalChartActions.getFilteredData({ regionCode, amt }));
    dispatch(dateChartActions.getFilteredData({ chargeAmt, fare, yesterday, today }));
  };

  return (
    <div className="map">
      <img src={mapChangeHandler(regionCode)} useMap="#image-map" alt="" />

      <map name="image-map">
        {mapData.map((item) => (
          <area
            key={v4()}
            target=""
            alt={item.alt}
            title={item.title}
            href="#"
            coords={item.coords}
            shape="circle"
            onClick={clickHandler}
          />
        ))}
      </map>
    </div>
  );
};

export default Map;
