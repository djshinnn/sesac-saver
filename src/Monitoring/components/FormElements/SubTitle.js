import React from "react";

const SubTitle = (props) => {
  const style = {
    width: props.width || "100%",
    backgroundColor: "#ccc",
    padding: "1rem",
    fontSize: "1.4rem",
  };

  return <div style={style}>{props.name}</div>;
};

export default SubTitle;
