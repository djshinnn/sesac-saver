import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import BasicButton from "../../common/FormElements/BasicButton";

const LoginButton = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const loginBtnStyle = {
    position: "absolute",
    top: "2rem",
    left: "166rem",
  };

  return (
    <div style={loginBtnStyle}>
      <BasicButton color="store" text="Logout" onClick={logout} />
    </div>
  );
};

export default LoginButton;
