import React from "react";

import { HOME, COURSE, ABOUT } from "../../pages/Routes/constants";
import SharpStudyLogo from "../../svg/SharpStudyLogo";
import AuthenticatedMobileLink from "./AuthenticatedMobileLink";
import NonAuthenticatedLink from "./NonAuthenticatedLink";
import SearchBar from "./SearchBar";

const MobileMenu = React.forwardRef(({ isAuthenticated, user, close }, ref) => (
  <div ref={ref} className="mobile-menu__root d-flex flex-column vw-100 p-3">
    <a href={HOME} className="mb-4 py-2 ">
      <SharpStudyLogo />
    </a>

    <i
      className="material-icons mobile-menu__icon cursor--pointer"
      onClick={close}
    >
      clear
    </i>

    <SearchBar />

    <a href={COURSE} className="m-3 mt-4 v-100 font-weight-bold text-center">
      Courses
    </a>

    <a href={ABOUT} className="m-3 v-100 font-weight-bold text-center">
      About
    </a>

    <div className="d-flex flex-column v-100 text-center">
      {isAuthenticated ? (
        <AuthenticatedMobileLink {...user} />
      ) : (
        <NonAuthenticatedLink />
      )}
    </div>
  </div>
));

export default MobileMenu;
