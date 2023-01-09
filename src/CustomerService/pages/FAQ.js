import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import List from "../../common/FormElements/List";
import { asyncFaqData } from "../../store/customerService/faqSlice";

const FAQ = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFaqData());
  }, [dispatch]);

  const faq = useSelector((state) => state.faq.faq);
  console.log(faq);

  const columns = [
    { field: "tag", headerName: "태그", width: 500 },
    { field: "title", headerName: "제목", width: 1090 },
  ];

  const rows = faq.map((item) => ({
    id: nanoid(),
    tag: item.tag,
    title: item.title,
  }));

  return (
    <div className="faq">
      <List columns={columns} rows={rows} height={800} page={10} title={"FAQ"} />
    </div>
  );
};

export default FAQ;
