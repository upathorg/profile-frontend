import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import './index.css'

export default () => (
  <BrowserRouter>
    <Switch>
      <SideBar />
      {/* <Navbar /> */}
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/auth" render={props => <Auth {...props} />} />
    </Switch>
  </BrowserRouter>
);
