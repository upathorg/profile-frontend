import React from "react";
// import { useSelector } from "react-redux";

import useOutsideClickDetector from "../../hooks/useOutsideClickDetector";
import useWindowSize from "../../hooks/useWindowSize";
import { HOME } from "../../pages/Routes/constants";
import SharpStudyLogo from "../../svg/SharpStudyLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import "./styles.scss";

const Navbar = () => {
  // TODO: use redux and/or graphql after implement signup/login
  // const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  // const user = useSelector((state) => state.auth?.user);

  let isAuthenticated = true;
  let user = {
    username: "Harrison",
    profileImage: "",
  };

  const [isMobile, setIsMobile] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const mobileMenuRef = React.useRef(null);
  const isClickedOutside = useOutsideClickDetector(mobileMenuRef);
  const windowSize = useWindowSize();

  React.useEffect(() => {
    if (windowSize.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  React.useEffect(() => {
    if (openMobileMenu && isClickedOutside) {
      setOpenMobileMenu(false);
    }
  }, [openMobileMenu, isClickedOutside]);

  return (
    <nav className="navbar__root fixed-top d-flex p-3">
      <div className="mr-auto px-2 align-self-center">
        <a href={HOME}>
          <SharpStudyLogo className="navbar__logo" />
        </a>
      </div>

      {!isMobile ? (
        <DesktopMenu isAuthenticated={isAuthenticated} user={user} />
      ) : (
        <>
          <i
            className="material-icons mobile-menu__icon cursor--pointer text-white"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            menu
          </i>

          {openMobileMenu && (
            <MobileMenu
              ref={mobileMenuRef}
              user={user}
              isAuthenticated={isAuthenticated}
              close={() => setOpenMobileMenu(false)}
            />
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
