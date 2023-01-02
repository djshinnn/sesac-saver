import React from "react";

const Title = ({ title }) => {
  return (
    <React.Fragment>
      <h1 className="title">{title}</h1>
      <div className="title__line"></div>
    </React.Fragment>
  );
};

export default Title;
