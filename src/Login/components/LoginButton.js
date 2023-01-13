import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import BasicButton from "../../common/FormElements/BasicButton";

const LoginButton = () => {
  const logout = async () => {
    await signOut(auth);
  };

  const loginBtnStyle = {
    position: "absolute",
    top: "2rem",
    left: "168rem",
  };

  return (
    <div style={loginBtnStyle}>
      <Link to="/">
        <BasicButton color="store" text="로그아웃" onClick={logout} />
      </Link>
    </div>
  );
};

export default LoginButton;
