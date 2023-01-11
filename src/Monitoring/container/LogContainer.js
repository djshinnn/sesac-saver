import React from "react";

import ItemReport from "../components/DetailItem/ItemReport";
import UsingLog from "../components/DetailItem/UsingLog";

const LogContainer = () => {
  return (
    <div className="log_container">
      <UsingLog />
      <ItemReport />
    </div>
  );
};

export default LogContainer;
