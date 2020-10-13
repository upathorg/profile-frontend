import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import signUpImage from "../../assets/images/signUpDefaultImage.png";
import FacebookButton from "../../components/SharedButtons/FacebookButton";
import GoogleButton from "../../components/SharedButtons/GoogleButton";
import LinkedInButton from "../../components/SharedButtons/LinkedInButton";
import { register, clearErrors } from "../../redux/actions/authAction";

const styles = {
  formControl: {
    borderColor: "#0099FF",
    borderRadius: "8px",
  },
  formCheck: {
    borderColor: "#0099FF",
    font: "Mulish",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "24px",
  },
};

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
  }, [error, isAuthenticated, history]);

  return (
    <Container fluid>
      <Row className="page-wrapper">
        <Col className="image-container" xs={5}>
          <img className="login-image" src={signUpImage} alt="Login Main" />
        </Col>
        <Col className="form-container">
          <div>
            <p className="signup-paragraph">
              Already a member? <a href="/login">Sign in</a>
            </p>
          </div>
          <div className="form-container-box">
            <Row>
              <Col>
                <h1 className="title-text">Sign up to Sharp Study</h1>
                <p className="subTitle-text">With your social network</p>
              </Col>
            </Row>
            <Row className="logo-btn-wrapper">
              <LinkedInButton buttonText="LinkedIn" />
              <GoogleButton buttonText="Google" />
              <FacebookButton buttonText="Facebook" />
            </Row>
            <div className="section-border">
              <div className="section-border-line"></div>
              <div className="section-border-text">OR</div>
              <div className="section-border-line"></div>
            </div>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    size="lg"
                    style={styles.formControl}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  style={styles.formControl}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  style={styles.formControl}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  style={styles.formControl}
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={onChange}
                />
                <Form.Text className="form-forgot-password"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  style={styles.formCheck}
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Form.Group>
                <div className="submit-btn-wrapper">
                  <button className="custom-submit-btn" type="submit">
                    CREATE ACCOUNT
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
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, clearErrors })(SignUp);
