import React from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import RoadmapCard from "./card";

const Courses = () => {
  const image =
    "https://alamotitlesa.com/wp-content/uploads/2015/03/Video-Placeholder-Image.jpg";
  return (
    <DashboardWrapper>
      <div style={{ padding: "50px" }}>
        <h2>Learning Path's</h2>
        <br />
        <RoadmapCard title="Roadmap" />
        <RoadmapCard title="Videos" image={image} />
        <RoadmapCard title="Articles" />
        <RoadmapCard title="Flashcards" />
        <RoadmapCard title="Quizzes" />
      </div>
    </DashboardWrapper>
  );
};

export default Courses;
