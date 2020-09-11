import React from "react";
import FacebookLogo from "../../../../assets/images/FacebookLogo.png";
const FacebookButton = () => {
  return (
    <button className="facebook-btn">
      <img src={FacebookLogo} alt="Facebook Logo" />
      <span>continue with Facebook</span>
    </button>
  );
};

export default FacebookButton;
