import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import styled from "styled-components";

import * as PATH from "../../pages/Routes/constants";
import Notepad from "../../svg/Notepad";
import "./styles.scss";

const menus = [
  {
    name: "Dashboard",
    path: PATH.ROADMAP,
    icon: <i className="material-icons mr-md-3">dashboard</i>,
  },
  {
    name: "Quiz",
    path: PATH.QUIZ,
    icon: <Notepad className="sidebar__notepad mr-md-3" />,
  },
  {
    name: "Courses",
    path: PATH.COURSE,
    icon: <i className="material-icons  mr-md-3">school</i>,
  },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // TODO: use redux after implement signup/login
  // const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const isAuthenticated = true;

  if (!isAuthenticated) return null;

  return (
    <aside className="sidebar__root">
      <Nav
        isOpen={isOpen}
        className="d-flex flex-md-column justify-content-around justify-content-md-start align-items-center align-items-md-start m-0 pt-2"
      >
        <li className="m-3" onClick={() => setIsOpen(!isOpen)}>
          <i className="material-icons cursor--pointer">menu</i>
        </li>

        {menus.map(({ name, path, icon }, i) => (
          <li className="my-md-3 ml-md-3" key={`sidebar-menu-${i}`}>
            <NavLink
              exact
              to={path}
              className="d-flex align-self-center"
              activeStyle={{ color: "#0099ff" }}
              activeClassName="sidebar__nav--active"
            >
              {icon}
              <LinkName isOpen={isOpen} className="font-weight-bold">
                {name}
              </LinkName>
            </NavLink>
          </li>
        ))}
      </Nav>
    </aside>
  );
}

const Nav = styled.ul`
  width: ${(props) => (props.isOpen ? 200 : 60)}px;
`;

const LinkName = styled.span`
  display: ${(props) => (props.isOpen ? "inline-block" : "none")};
`;
