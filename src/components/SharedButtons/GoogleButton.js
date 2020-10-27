import axios from "axios";
import React from "react";

import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { GOOGLE_LOGIN } from "../../utils/config";

const GoogleButton = (props) => {
  
  const onClickHandler = () => {window.location.href="/auth/google"};


  return (
    <button className="btn google" onClick={onClickHandler}>
      <img src={GoogleLogo} alt="Google Logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default GoogleButton;
