import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ErrorFeed = () => {
  const errorFeedData = useSelector(state => state.errorFeed.rows);
  console.log(errorFeedData);

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {errorFeedData.map(item => (
          <ListItem key={nanoid()}>
            <ListItemText primary={item.chargeName} />
            <ListItemText primary={item.time} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ErrorFeed;
