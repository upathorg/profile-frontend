import React from "react";
import FacebookLogo from "../../../../assets/images/FacebookLogo.png";

const FacebookButton = (props) => {
  return (
    <button className="facebook-btn">
      <img src={FacebookLogo} alt="Facebook Logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default FacebookButton;
