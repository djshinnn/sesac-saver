import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { List, ListItem, ListItemText } from "@mui/material";

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
            <ListItemText
              primary={item.chargeName}
              primaryTypographyProps={{ fontSize: "1.5rem" }}
            />
            <ListItemText
              primary={item.time}
              sx={{ textAlign: "right" }}
              primaryTypographyProps={{ fontSize: "1.5rem" }}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default ErrorFeed;
