import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGIN } from "./constants";

export default function PrivateRoute({ component: Component, ...rest }) {
  // TODO: use redux after implement signup/login
  const isAuthenticated = localStorage.getItem("jwt");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={LOGIN} />
      }
    />
  );
}
