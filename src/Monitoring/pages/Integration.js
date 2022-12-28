import React from "react";
import Grid from "@mui/material/Grid";

import ChartContainer from "../container/ChartContainer";
import MapContainer from "../container/MapContainer";

const Integration = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <MapContainer />
      </Grid>
      <Grid item xs={9}>
        <ChartContainer />
      </Grid>
    </Grid>
  );
};

export default Integration;
