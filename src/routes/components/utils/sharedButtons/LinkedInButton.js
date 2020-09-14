import React from "react";
import "./AuthButton.css";
import LinkedInLogo from "../../../../assets/images/LinkedInLogo.png";

const LinkedInButton = (props) => {
  return (
    <button className="linkedin-btn">
      <img src={LinkedInLogo} alt="LinkedIn Logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default LinkedInButton;
