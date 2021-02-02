import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import setAuthToken from "../../utils/setAuthToken";
import PrivateRoute from "./PrivateRoute";
import * as PATH from "./constants";
import "./index.scss";
import Spinner from "../../components/Spinner/spinner";

const Login = lazy(() => import("../Auth/Login"));
const SignUp = lazy(() => import("../Auth/SignUp"));
const Profile = lazy(() => import("../Profile"));
const Roadmap = lazy(() => import("../Roadmap"));
const About = lazy(() => import("../About/about"));
const Courses = lazy(() => import("../Courses/course"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default () => (
  <BrowserRouter>
    <Navbar />
    <div className="content__body overflow-auto vw-100">
      <Suspense fallback={<div>Loading.....</div>}>
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
          <Route exact path={PATH.COURSE} component={Courses} />
          <Route exact path={PATH.ABOUT} component={About} />
        </Switch>
      </Suspense>
    </div>
  </BrowserRouter>
);
