import React from "react";

import { LOGIN, SIGNUP } from "../../pages/Routes/constants";

export default function NonAuthenticatedLink() {
  return (
    <>
      <a href={LOGIN} className="m-3 mx-4 font-weight-bold">
        Login
      </a>

      <a
        href={SIGNUP}
        className="m-3 ml-lg-4 font-weight-bold"
        id="navbar__signup"
      >
        Sign Up
      </a>
    </>
  );
}
