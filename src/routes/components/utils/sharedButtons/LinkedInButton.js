import React from "react";
import './AuthButton.css'
import LinkedInLogo from '../../../../assets/images/LinkedInLogo.png'

const LinkedInButton = () => {
  return (
    <button className="linkedin-btn">
      <img src={LinkedInLogo} alt="LinkedIn Logo" />
      <span>continue with LinkedIn</span>
    </button>
  );
};

export default LinkedInButton;
