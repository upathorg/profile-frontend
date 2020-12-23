import React from "react";

import GoogleLogo from "../../assets/images/GoogleLogo.png";

const GoogleButton = (props) => {
  return (
    <button type="button" className="social-button">
      <span className="__icon">
        <img src={GoogleLogo} alt="Google Logo" />
      </span>
      <span className="__text">{props.buttonText}</span>
    </button>
  );
};

export default GoogleButton;
