import React from "react";

import { PROFILE } from "../../pages/Routes/constants";

const AccountMenu = React.forwardRef((props, ref) => (
  <ul
    ref={ref}
    className="account-menu__root border rounded px-3 py-1"
    {...props}
  >
    <li>
      <a href={PROFILE}>Settings</a>
    </li>

    <li onClick={() => console.log("Change Appearances")}>Appearances</li>

    <li className="account-menu__logout" onClick={() => console.log("Logout")}>
      Logout
    </li>
  </ul>
));

export default AccountMenu;
