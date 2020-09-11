import React from "react";
import GoogleLogo from '../../../../assets/images/GoogleLogo.png'
const GoogleButton = () => {
  return (
    <button className="google-btn">
      <img src={GoogleLogo} alt="Google Logo" />
      <span>continue with Google</span>
    </button>
  );
};

export default GoogleButton;
