import React from "react";

import FacebookLogo from "../../assets/images/FacebookLogo.jpg";

const FacebookButton = (props) => {
  return (
    <button type="button" className="social-button">
      <span className="__icon">
        <img src={FacebookLogo} alt="FacebookLogo Logo" />
      </span>
      <span className="__text">{props.buttonText}</span>
    </button>
  );
};

export default FacebookButton;
