import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../../components/SideBar";
import setAuthToken from "../../utils/setAuthToken";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Profile from "../Profile";
import Roadmap from "../Roadmap";
import "./index.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default () => (
  <div className="d-flex vw-100 vh-100">
    <SideBar />
    <div className="content-wrapper overflow-auto">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp {...props} />}
          />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);
