import React from "react";

import ErrorFeed from "../components/Integration/ErrorFeed";
import Map from "../components/Integration/Map";

const MapContainer = () => {
  return (
    <div className="map_container">
      <Map />
      <ErrorFeed />
    </div>
  );
};

export default MapContainer;
