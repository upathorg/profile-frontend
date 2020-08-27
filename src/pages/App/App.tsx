import React from "react";
import "./App.css";
// @ts-ignore
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../Auth/Register/register";
import Register from "../Auth/Login/login";
import ResetPassword from "../Auth/PasswordReset/passwordReset";
import Main from "../Views/main";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Register} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/dashboard" component={Main} />
      </div>
    </Router>

  );
};

export default App;
