import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
import setAuthToken from "../../utils/setAuthToken";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Profile from "../Profile";
import Roadmap from "../Roadmap";
import PrivateRoute from "./PrivateRoute";
import * as PATH from "./constants";
import "./index.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default () => (
  <BrowserRouter>
    <Navbar />

    <div className="vw-100">
      {/* <Sidebar /> */}

      {/* <div className="content-wrapper overflow-auto"> */}
      <Switch>
        <Route
          exact
          path={PATH.LOGIN}
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path={PATH.SIGNUP}
          render={(props) => <SignUp {...props} />}
        />
        <PrivateRoute exact path={PATH.ROADMAP} component={Roadmap} />
        <PrivateRoute exact path={PATH.PROFILE} component={Profile} />
      </Switch>
    </div>
    {/* </div> */}
  </BrowserRouter>
);
