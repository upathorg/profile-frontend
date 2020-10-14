import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

import { SIGNUP } from "./constants";

export default function PrivateRoute({ component: Component, ...rest }) {
  // TODO: use redux after implement signup/login
  // const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={SIGNUP} />
      }
    />
  );
}
