import React from "react";
import ChartContainer from "../container/ChartContainer";
import MapContainer from "../container/MapContainer";

const Integration = () => {
  return (
    <div style={{ display: "flex" }}>
      <MapContainer />
      <ChartContainer />
    </div>
  );
};

export default Integration;
