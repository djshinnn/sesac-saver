import React from "react";
import ErrorFeed from "../components/Integration/ErrorFeed";
import Map from "../components/Integration/Map";

const MapContainer = () => {
  return (
    <div>
      <Map />
      <ErrorFeed />
    </div>
  );
};

export default MapContainer;
