import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ErrorFeed = () => {
  const errorFeedData = useSelector((state) => state.errorFeed.rows);

  return (
    <React.Fragment>
      <div className="error_title">
        <h2>장애 접수 Feed</h2>
        <div>{errorFeedData.length} messages</div>
      </div>
      <List className="error_feed" sx={{ padding: "0 1rem" }}>
        {errorFeedData.map((item) => (
          <ListItem className="error_feed__item" key={nanoid()}>
            <ListItemText primary={item.chargeName} />
            <ListItemText primary={item.time} sx={{ textAlign: "right" }} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default ErrorFeed;
