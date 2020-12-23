import React, { useState, useEffect } from "react";
import loginImage from "../../assets/images/undraw_tutorial_video_vtd1.png";
import FacebookButton from "../../components/SharedButtons/FacebookButton";
import GoogleButton from "../../components/SharedButtons/GoogleButton";
import LinkedInButton from "../../components/SharedButtons/LinkedInButton";
import { connect } from "react-redux";
import { login, clearErrors, loadUser } from "../../redux/actions/authAction";
import "./Login.css";

const Login = ({
  login,
  setAlert,
  isAuthenticated,
  error,
  clearErrors,
  history,
  token,
  loadUser,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("jwt", token);
      history.push("/roadmap");
    }
    if (token) {
      loadUser();
    }

    if (error === "Invalid Credentials") {
      clearErrors();
    }
  }, [error, isAuthenticated, history]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Fields cannot be empty", "danger");
      clearErrors();
    } else {
      login({ email, password });
    }
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <img src={loginImage} alt="Login Main" />
        </section>
      </div>
      <div className="right">
        <form onSubmit={onSubmit}>
          <section className="copy">
            <h2>Sign In</h2>
            <div className="login-container">
              <p>
                Don't have an account?
                <a href="/signup">
                  {" "}
                  <strong>Sign Up</strong>
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
          <button className="signup-btn" type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  error: state.auth.error,
});
export default connect(mapStateToProps, { login, clearErrors, loadUser })(
  Login
);
