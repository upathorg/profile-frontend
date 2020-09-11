import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Auth from "./Auth";
import Login from "./Login";
import Register from "./Register";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);
