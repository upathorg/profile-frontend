import React from "react";
import { useSelector } from "react-redux";

import logo from "../../assets/images/sharpStudy-logo-grayscale.png";
import * as PATH from "../../pages/Routes/constants";
import AuthenticatedLink from "./AuthenticatedLink";
import NonAuthenticatedLink from "./NonAuthenticatedLink";
import "./styles.scss";

const Navbar = () => {
  // TODO: use redux after implement signup/login
  // const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  // const user = useSelector((state) => state.auth?.user);

  let isAuthenticated = true;
  let user = {
    username: "sharp study",
    profileImage: "",
  };

  const [searchKeyword, setSearchKeyword] = React.useState("");

  const handleSearch = () => {
    // TODO: Search
    console.log(`Searching: ${searchKeyword}`);
  };

  return (
    <nav className="navbar__root fixed-top d-flex p-3">
      <div className="mr-auto p-2">
        <a href={PATH.HOME}>
          <img src={logo} alt="SharpStudy" className="navbar__logo" />
        </a>
      </div>

      <a href={PATH.COURSE} className="mx-4 font-weight-bold align-self-center">
        Courses
      </a>

      <a href={PATH.ABOUT} className="mx-4 font-weight-bold align-self-center">
        About
      </a>

      <div className="navbar__search d-flex align-self-center mx-2 py-1 px-2">
        <i
          className="material-icons mr-2 cursor--pointer"
          onClick={handleSearch}
        >
          search
        </i>
        <input
          type="text"
          placeholder="Search e.g. HTML..."
          value={searchKeyword}
          className="navbar__search-input"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
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
