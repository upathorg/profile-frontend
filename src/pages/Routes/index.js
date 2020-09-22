import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SignUp from "../Auth/SignUp";
import Roadmap from "../Roadmap";
import "./index.css";

export default () => (
  <div className="d-flex vw-100 vh-100">
    <SideBar />

    <div className="content-wrapper overflow-auto">
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
          <Route exact path="/roadmap" component={Roadmap} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);
