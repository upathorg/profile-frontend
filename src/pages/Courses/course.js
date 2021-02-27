import React from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import RoadmapCard from "./card";
import { Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { GET_COURSE } from "../../utils/graphql/graphql";

const Courses = () => {
  const { data, error, loading } = useQuery(GET_COURSE);
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
    <DashboardWrapper>
      <div style={{ padding: "50px" }}>
        <h2>Learning Path's</h2>
        <br />
        <Container>
          <Row>
            <RoadmapCard title="Roadmap" data={data.roadmaps} />
          </Row>
        </Container>
      </div>
    </DashboardWrapper>
  );
};

export default Courses;
