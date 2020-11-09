import React from "react";

import { COURSE, ABOUT } from "../../pages/Routes/constants";
import AuthenticatedLink from "./AuthenticatedLink";
import NonAuthenticatedLink from "./NonAuthenticatedLink";
import SearchBar from "./SearchBar";

export default function DesktopMenu({ isAuthenticated, user }) {
  return (
    <>
      <a href={COURSE} className="mx-4 font-weight-bold align-self-center">
        Courses
      </a>

      <a href={ABOUT} className="mx-4 font-weight-bold align-self-center">
        About
      </a>

      <SearchBar />

      <div className="pr-4 align-self-center">
        {isAuthenticated ? (
          <AuthenticatedLink {...user} />
        ) : (
          <NonAuthenticatedLink />
        )}
      </div>
    </>
  );
}
