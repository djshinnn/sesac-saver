import React from "react";

import Title from "../FormElements/Title";

const CompaniesEdit = () => {
  return (
    <div className="companies_edit">
      <Title title={"충전 사업자"} />

      <div className="companies_edit__container">
        <div className="companies_edit__box">
          <div>충전 사업자</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className="companies_edit__box">
          <div>이미지</div>
          <div>
            <input type="file" />
          </div>
        </div>

        <div className="companies_edit__box">
          <div>연락처</div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesEdit;
