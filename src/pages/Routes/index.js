import React, { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import setAuthToken from "../../utils/setAuthToken";
import PrivateRoute from "./PrivateRoute";
import * as PATH from "./constants";
import "./index.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API } from "../../utils/config";

const Login = lazy(() => import("../Auth/Login"));
const SignUp = lazy(() => import("../Auth/SignUp"));
const Profile = lazy(() => import("../Profile"));
const Roadmap = lazy(() => import("../Roadmap"));
const About = lazy(() => import("../About/about"));
const Courses = lazy(() => import("../Courses/course"));
const CourseDetails = lazy(() => import("../Courses/courseDetails"));

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Navbar />
      <div className="content__body overflow-auto vw-100">
        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
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
            <Route exact path={PATH.COURSE_DETAILS} component={CourseDetails} />
            <Route exact path={PATH.ABOUT} component={About} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  </ApolloProvider>
);
