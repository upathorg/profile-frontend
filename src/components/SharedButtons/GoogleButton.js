import React from "react";

import GoogleLogo from "../../assets/images/GoogleLogo.png";

const GoogleButton = (props) => {
  return (
    <button className="btn google">
      <img src={GoogleLogo} alt="Google Logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default GoogleButton;
