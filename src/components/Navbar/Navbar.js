import React from "react";
// import { useSelector } from "react-redux";

import logo from "../../assets/images/sharpStudy-logo-grayscale.png";
import * as PATH from "../../pages/Routes/constants";
import AuthenticatedLink from "./AuthenticatedLink";
import NonAuthenticatedLink from "./NonAuthenticatedLink";
import "./styles.scss";

const Navbar = () => {
  // TODO: use redux after implement signup/login
  // const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  // const user = useSelector((state) => state.auth?.user);
  let isAuthenticated = false;
  let user = {
    username: "sharp study",
    profileImage: "",
  };

  return (
    <nav className="navbar__root fixed-top d-flex p-3">
      <div className="mr-auto p-2">
        <a href={PATH.HOME}>
          <img src={logo} alt="SharpStudy" className="navbar__logo" />
        </a>
      </div>

      <div className="pr-4 align-self-center">
        {isAuthenticated ? (
          <AuthenticatedLink {...user} />
        ) : (
          <NonAuthenticatedLink />
        )}
      </div>

      <div className="navbar__divider" />
    </nav>
  );
};

export default Navbar;
