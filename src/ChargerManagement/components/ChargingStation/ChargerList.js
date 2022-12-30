import React from "react";
import { useSelector } from "react-redux";

import Title from "../FormElements/Title";

const ChargerList = () => {
  const chargerList = useSelector((state) => state.chargerList);

  console.log({ chargerList });

  return (
    <div className="charger_list">
      <Title title={"충전기 목록"} />
      ChargerList
    </div>
  );
};

export default ChargerList;
