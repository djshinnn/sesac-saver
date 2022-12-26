import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncMonthChartData } from "../../../store/totalChartSlice";
import { totalChartActions } from "../../../store/totalChartSlice";
import MapImage from "../../../assets/images/map.png";
import MarkerRed from "../../../assets/images/marker_red.png";
import MarkerBlack from "../../../assets/images/marker_black.png";

const Map = () => {
  const dispatch = useDispatch();

  const totalData = useSelector((state) => state.totalChart.row);

  const clickHandler = (e) => {
    e.preventDefault();

    const filteredData = totalData.filter(
      (data) => data.regionCode === e.target.title
    );
    const regionCode = filteredData.map((amt) => amt.regionCode);
    const amt = filteredData.map((amt) => amt.chargeAmt);

    dispatch(totalChartActions.getFilteredData({ regionCode, amt }));
  };

  useEffect(() => {
    dispatch(asyncMonthChartData());
  }, [dispatch]);

  return (
    <div>
      <img src={MapImage} useMap="#image-map" alt="" />

      <map name="image-map">
        <area
          target=""
          alt="su"
          title="su"
          href="#"
          coords="110,129,20"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="gg"
          title="gg"
          href="#"
          coords="152,161,24"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="gw"
          title="gw"
          href="#"
          coords="247,105,21"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="cn"
          title="cn"
          href="#"
          coords="104,269,22"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="cb"
          title="cb"
          href="#"
          coords="191,233,19"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="gb"
          title="gb"
          href="#"
          coords="290,291,19"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="gn"
          title="gn"
          href="#"
          coords="252,427,18"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="jb"
          title="jb"
          href="#"
          coords="134,377,18"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="jn"
          title="jn"
          href="#"
          coords="105,468,20"
          shape="circle"
          onClick={clickHandler}
        />
        <area
          target=""
          alt="jj"
          title="jj"
          href="#"
          coords="104,608,21"
          shape="circle"
          onClick={clickHandler}
        />
      </map>
    </div>
  );
};

export default Map;
