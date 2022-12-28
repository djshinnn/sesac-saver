import React from "react";

const SubTitle = (props) => {
  const style = {
    backgroundColor: "#ccc",
    padding: "0.5rem",
  };

  return <div style={style}>{props.name}</div>;
};

export default SubTitle;
