import React from "react";

import useOutsideClickDetector from "../../hooks/useOutsideClickDetector";
import ChevronDown from "../../svg/ChevronDown";
import AccountMenu from "./AccountMenu";

export default function AuthenticatedLink({ username, profileImage }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  const isClickedOutside = useOutsideClickDetector(menuRef);

  React.useEffect(() => {
    if (openMenu && isClickedOutside) {
      setOpenMenu(false);
    }
  }, [openMenu, isClickedOutside]);

  return (
    <>
      <div className="d-flex flex-column flex-lg-row">
        <a href="" className="m-3 ml-lg-4 font-weight-bold align-self-center">
          <i className="material-icons align-bottom">notifications</i>
        </a>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="navbar__username m-3 ml-lg-4 font-weight-bold align-self-center d-flex cursor--pointer"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="profile"
              className="navbar__user-image align-bottom mr-2"
            />
          ) : (
            <i className="material-icons align-bottom mr-2">account_circle</i>
          )}
          <span id="navbar__username">{username}</span>
          <ChevronDown className="navbar__down-icon ml-1" />
        </div>
      </div>

      {openMenu && <AccountMenu ref={menuRef} />}
    </>
  );
}
