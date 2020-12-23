import React from "react";

import LinkedInLogo from "../../assets/images/LinkedInLogo.png";
import "./AuthButton.css";

const LinkedInButton = (props) => {
  return (
    <button type="button" className="social-button">
      <span className="__icon">
        <img src={LinkedInLogo} alt="LinkedInLogo Logo" />
      </span>
      <span className="__text">{props.buttonText}</span>
    </button>
  );
};

export default LinkedInButton;
