import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import signUpImage from "../../assets/images/signUpDefaultImage.png";
import FacebookButton from "../../components/SharedButtons/FacebookButton";
import GoogleButton from "../../components/SharedButtons/GoogleButton";
import LinkedInButton from "../../components/SharedButtons/LinkedInButton";
import { register, clearErrors } from "../../redux/actions/authAction";
import "./auth.css";

const SignUp = ({ register, error, clearErrors, isAuthenticated, history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      password2 === ""
    ) {
      // to be implemented when backend errors handling are implemented
    } else if (password !== password2) {
      // to be implemented when backend errors handling are implemented
    } else {
      register({ username, email, password });
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      // to be implemented when backend errors handling are implemented
      clearErrors();
    }
  }, [error, isAuthenticated, history, clearErrors]);

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <img src={signUpImage} alt="Login Main" />
        </section>
      </div>
      <div className="right">
        <form onSubmit={onSubmit}>
          <section className="copy">
            <h2>Sign Up</h2>
            <div className="login-container">
              <p>
                Already have an account?
                <a href="/">
                  {" "}
                  <strong>Sign In</strong>
                </a>
              </p>
            </div>
            <LinkedInButton buttonText="LinkedIn" />
            <GoogleButton buttonText="Google" />
            <FacebookButton buttonText="Facebook" />
          </section>
          <div className="input-container name">
            <label htmlFor="fname">Username</label>
            <input
              id="fname"
              name="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="input-container password">
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={onChange}
            />
            <i className="fa fa-eye-slash" />
          </div>
          <div className="input-container password">
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password2"
              type="password"
              placeholder="confirm password"
              value={password2}
              onChange={onChange}
            />
            <i className="fa fa-eye-slash" />
          </div>
          <button className="signup-btn" type="submit">
            SIGN IN
          </button>
          <section class="copy legal">
            <p>
              <span class="small">
                By continuing, you agree to accept our <br />{" "}
                <a href="#/"> Privacy Policy</a> &amp;{" "}
                <a href="#/">Terms of Service</a>.
              </span>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, clearErrors })(SignUp);
