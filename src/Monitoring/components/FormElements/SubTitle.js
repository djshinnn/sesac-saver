import React from "react";

const SubTitle = (props) => {
  const style = {
    width: props.width || "100%",
    borderRadius: "0.5rem",
    backgroundColor: "#000051",
    color: "white",
    padding: "1rem",
    fontSize: "1.6rem",
    fontWeight: "bold",
  };

  return <div style={style}>{props.name}</div>;
};

export default SubTitle;
