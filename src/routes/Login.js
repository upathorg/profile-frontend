import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import loginImage from "../assets/images/undraw_tutorial_video_vtd1.png";
import LinkedInButton from "./components/utils/sharedButtons/LinkedInButton";
import GoogleButton from "./components/utils/sharedButtons/GoogleButton";
import FacebookButton from "./components/utils/sharedButtons/FacebookButton";
import "./Login.css";

const styles = {
  formControl: {
    borderColor: "#0099FF",
  },
};

const Login = () => {
  return (
    <Container fluid>
      <Row className="page-wrapper">
        <Col className="image-container" xs={5}>
          <img className="login-image" src={loginImage} alt="Login Main" />
        </Col>
        <Col className="form-container">
          <div>
            <p className="signup-paragraph">
              Have a member yet? <a href="/register">Sign up</a>
            </p>
          </div>
          <div className="form-container-box">
            <Row>
              <Col>
                <h1 className="signin-title-text">Sign in to Sharp Study</h1>
              </Col>
            </Row>
            <Row className="logo-btn-wrapper">
              <LinkedInButton />
              <GoogleButton />
              <FacebookButton />
            </Row>
            <div className="section-border">
              <div className="section-border-line"></div>
              <div className="section-border-text">OR</div>
              <div className="section-border-line"></div>
            </div>
            <Form>
              <Form.Group>
                <Form.Control
                  style={styles.formControl}
                  type="email"
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={styles.formControl}
                  type="password"
                  placeholder="Password"
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

export default Login;
