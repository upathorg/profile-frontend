import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import signUpImage from "../../assets/images/signUpDefaultImage.png";
import FacebookButton from "../../components/SharedButtons/FacebookButton";
import GoogleButton from "../../components/SharedButtons/GoogleButton";
import LinkedInButton from "../../components/SharedButtons/LinkedInButton";

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

const SignUp = () => {
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
            <Form>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    required
                    size="lg"
                    style={styles.formControl}
                    type="text"
                    placeholder="Username"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  size="lg"
                  style={styles.formControl}
                  type="email"
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  size="lg"
                  style={styles.formControl}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  size="lg"
                  style={styles.formControl}
                  type="password"
                  placeholder="Confirm Password"
                />
                <Form.Text className="form-forgot-password"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  style={styles.formCheck}
                  required
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

export default SignUp;
