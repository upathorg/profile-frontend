import React from "react";

import * as PATH from "../../pages/Routes/constants";

export default function NonAuthenticatedLink() {
  return (
    <>
      <a href={PATH.LOGIN} className="mr-3 font-weight-bold">
        Login
      </a>
      |
      <a href={PATH.SIGNUP} className="ml-3 font-weight-bold">
        Sign Up
      </a>
    </>
  );
}
