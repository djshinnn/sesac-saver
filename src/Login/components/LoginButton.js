import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import BasicButton from "../../common/FormElements/BasicButton";

const LoginButton = () => {
  const location = useLocation();

  const loginBtnStyle = {
    position: "absolute",
    top: "2rem",
    left: "168rem",
    display: location.pathname === "/login" ? "none" : "block",
  };

  return (
    <div style={loginBtnStyle}>
      <Link to="/login">
        <BasicButton color="store" text="로그인" />
      </Link>
    </div>
  );
};

export default LoginButton;
