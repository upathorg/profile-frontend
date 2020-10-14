import React from "react";

import * as PATH from "../../pages/Routes/constants";

export default function AuthenticatedLink({ username, profileImage }) {
  return (
    <>
      <a href={PATH.PROFILE} className="mr-3 font-weight-bold">
        {profileImage ? (
          <img
            src={profileImage}
            alt="profile"
            className="navbar__user-image align-bottom mr-2"
          />
        ) : (
          <i className="material-icons align-bottom mr-2">account_circle</i>
        )}
        {username}
      </a>
      |
      <a href={PATH.LOGOUT} className="ml-3 font-weight-bold">
        Log Out
      </a>
    </>
  );
}
