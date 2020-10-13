import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import loginImage from "../../assets/images/undraw_tutorial_video_vtd1.png";
import FacebookButton from "../../components/SharedButtons/FacebookButton";
import GoogleButton from "../../components/SharedButtons/GoogleButton";
import LinkedInButton from "../../components/SharedButtons/LinkedInButton";
import { connect } from "react-redux";
import { login, clearErrors, loadUser } from "../../redux/actions/authAction";
import "./Login.css";

const styles = {
  formControl: {
    borderColor: "#0099FF",
  },
};

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
    <Container fluid>
      <Row className="page-wrapper">
        <Col className="image-container" xs={5}>
          <img className="login-image" src={loginImage} alt="Login Main" />
        </Col>
        <Col className="form-container">
          <div>
            <p className="signup-paragraph">
              Not a member yet? <a href="/signup">Sign up</a>
            </p>
          </div>
          <div className="form-container-box">
            <Row>
              <Col>
                <h1 className="signin-title-text">Sign in to Sharp Study</h1>
              </Col>
            </Row>
            <Row className="logo-btn-wrapper">
              <LinkedInButton buttonText="Continue with LinkedIn" />
              <GoogleButton buttonText="Continue with Google" />
              <FacebookButton buttonText="Continue with Facebook" />
            </Row>
            <div className="section-border">
              <div className="section-border-line"></div>
              <div className="section-border-text">OR</div>
              <div className="section-border-line"></div>
            </div>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Control
                  style={styles.formControl}
                  size="lg"
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={styles.formControl}
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={styles.formControl}
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
                <Form.Text className="form-forgot-password">
                  <a href="/">Forgot password?</a>
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <div className="submit-btn-wrapper">
                  <button className="custom-submit-btn" type="submit">
                    SIGN IN
                  </button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
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
