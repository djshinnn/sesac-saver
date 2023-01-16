import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="container__item landing-page-container">
        <div className="content__wrapper">
          <div className="ellipses-container">
            <h2 className="greeting">SeSAC Saver</h2>
            <button className="greeting_btn">
              <Link to="/login">Login</Link>
            </button>
            <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit"></div>
            </div>

            <div className="ellipses ellipses__outer--thick"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
