import React from "react";

import { PROFILE } from "../../pages/Routes/constants";

export default function AuthenticatedMobileLink({ username }) {
  return (
    <>
      <a href="#/" className="m-3 ml-lg-4 font-weight-bold">
        Notifications
      </a>

      <a href={PROFILE} className="m-3 ml-lg-4 font-weight-bold">
        Settings
      </a>

      <div
        className="m-3 ml-lg-4 font-weight-bold"
        onClick={() => console.log("Change Appearances")}
      >
        Appearances
      </div>

      <div
        className="account-menu__logout m-3 ml-lg-4 font-weight-bold"
        onClick={() => console.log("Logout")}
      >
        Logout
      </div>
    </>
  );
}
