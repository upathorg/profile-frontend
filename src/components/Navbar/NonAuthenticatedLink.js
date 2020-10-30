import React from "react";

import * as PATH from "../../pages/Routes/constants";

export default function NonAuthenticatedLink() {
  return (
    <>
      <a href={PATH.LOGIN} className="mx-4 font-weight-bold">
        Login
      </a>

      <a
        href={PATH.SIGNUP}
        className="ml-4 font-weight-bold"
        id="navbar__signup"
      >
        Sign Up
      </a>
    </>
  );
}
