import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import Title from "./Title";

const List = ({ rows, columns, height, page, title }) => {
  const [pageSize, setPageSize] = useState(page);

  return (
    <div className="list">
      <Title title={title} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sx={{ fontSize: "1.7rem", height }}
      />
    </div>
  );
};

export default List;
