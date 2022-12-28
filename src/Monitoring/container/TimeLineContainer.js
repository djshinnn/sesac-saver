import React from "react";
import ItemSpec from "../components/DetailItem/ItemSpec";
import TimeLine from "../components/DetailItem/TimeLine";

const TimeLineContainer = () => {
  return (
    <div className="timeline_container">
      <TimeLine />
      <ItemSpec />
    </div>
  );
};

export default TimeLineContainer;
