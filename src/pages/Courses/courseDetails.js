import React from "react";
import { Col, Container, Card, Row, Spinner } from "react-bootstrap";
import "./course.css";
import { COURSE_DETAILS } from "../../utils/graphql/graphql";
import { useQuery } from "@apollo/react-hooks";
import image from ".././../assets/images/signUpDefaultImage.png";

const CourseDetails = ({
  match: {
    params: { roadmapId },
  },
}) => {
  console.log(roadmapId);

  const { data, error, loading } = useQuery(COURSE_DETAILS, {
    variables: { roadmapId },
  });
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  return (
    <>
      <Container>
        <Row>
          <Col xl={6} xs={12}>
            <Card className="details mt-12">
              <Card.Body>
                <Card.Title className="details_course_title">
                  {data.roadmapById && data.roadmapById.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 details_course_info">
                  About the course :
                </Card.Subtitle>
                <Card.Text className="details_course_description">
                  {data.roadmapById && data.roadmapById.description}.
                </Card.Text>
                <div className="icon_section">
                  <div className="icon">
                    <p>
                      <i className="fa fa-check-circle-o" aria-hidden="true" />{" "}
                      Level: Introductory
                    </p>
                    <p>
                      <i className="fa fa-check-circle-o" aria-hidden="true" />{" "}
                      Length: 2 - 3 weeks
                    </p>
                    <p>
                      <i className="fa fa-check-circle-o" aria-hidden="true" />{" "}
                      Effort: 5 - 7 hours per week
                    </p>
                  </div>
                  <button className="quiz_button">TAKE A QUIZ</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} xs={12}>
            <Card>
              <Card.Img
                className="mt-12 details_image"
                variant="top"
                src={image}
              />
            </Card>
          </Col>
          <Col xs={12}>
            <Card.Title className="text-center _title">
              <strong>What you will learn</strong>
            </Card.Title>
          </Col>
          <Col sm={4}>
            <Card body className="body">
              {" "}
              <i className="fa fa-check text-icon" aria-hidden="true" />
              <span className="text">
                Develop web sites using the latest web standards
              </span>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <i className="fa fa-check text-icon" aria-hidden="true" />
              <span className="text">
                Fundamentals of JavaScript to help you develop interactive web
                apps
              </span>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <i className="fa fa-check text-icon" aria-hidden="true" />
              <span className="text">
                How to code with modern HTML5 tags, draw and animate fun Web.
              </span>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <i className="fa fa-check text-icon" aria-hidden="true" />
              <span className="text">
                Fundamentals of JavaScript to help you develop interactive web
                apps
              </span>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <i className="fa fa-check text-icon" aria-hidden="true" />
              <span className="text">
                How to code with modern HTML5 tags, draw and animate fun Web.
              </span>
            </Card>
          </Col>
          <Col xs={12}>
            <Card.Title className="text-center _title">
              <strong>How it works</strong>
            </Card.Title>
          </Col>
          <Col sm={4}>
            <Card body className="">
              <p className="text-center">
                Choose the lesson that's right for you and take the next step to
                achieving your learning goals.
              </p>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <p className="text-center">
                Keep track of your progress via the "Profile" page.
              </p>
            </Card>
          </Col>
          <Col sm={4}>
            <Card body>
              <p className="text-center">
                Learn new skills with bite-sized video tutorials, then test your
                knowledge with a quick quiz.
              </p>
            </Card>
          </Col>
          <Col xs={12}>
            <Card.Title className="text-center _title">
              <strong>Requirements</strong>
            </Card.Title>
          </Col>
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://fullscale.io/blog/wp-content/uploads/2020/06/front-end-tools.png"
              />
              <Card.Body>
                <Card.Title>Introduction to HTML5</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/07/what-is-javascript.jpg"
              />
              <Card.Body>
                <Card.Title>Introduction to CSS3</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJhHRH4bHHcHjk9FzDeF22aLq5NPJ5foOlQ&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Introduction to JS</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br />
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/5120/1*zWGvoz1xmYTp_RKkv-w1AQ.png"
              />
              <Card.Body>
                <Card.Title>Advanced JS</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://fullscale.io/blog/wp-content/uploads/2020/06/front-end-tools.png"
              />
              <Card.Body>
                <Card.Title>Introduction to JS</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              border="secondary"
              className="requirements"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/5120/1*zWGvoz1xmYTp_RKkv-w1AQ.png"
              />
              <Card.Body>
                <Card.Title>Introduction to HTML5</Card.Title>
                <Card.Text>
                  18 videos (Total 120 min), 6 readings, 12 quizzes .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDetails;
