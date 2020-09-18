import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SignUp from "../Auth/SignUp";
// import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import "./index.css";

export default () => (
  <div className="h-screen w-screen flex bg-gray-200">
    <SideBar />

    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);
