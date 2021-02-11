import React, { useState } from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import RoadmapCard from "./card";
import { client } from '../../utils/config';
import { gql } from '@apollo/client';

const Courses = () => {
  const [roadmaps, setRoadmaps] = useState();
  let roadmap;
  client.query({
    query: gql`
      query roadmaps {
        roadmaps {
          name
          description
          roadmapId
          imageUrl
        }
      }
    `
  })
    .then(result => {
      setRoadmaps(result.data.roadmaps);

    });

  const image =
    "https://alamotitlesa.com/wp-content/uploads/2015/03/Video-Placeholder-Image.jpg";
  return (
    <DashboardWrapper>
      <div style={{ padding: "50px" }}>
        <h2>Learning Path's</h2>
        <br />
        <RoadmapCard title="Roadmap" data={roadmaps} />
        {/* <RoadmapCard title="Videos" image={image} />
        <RoadmapCard title="Articles" />
        <RoadmapCard title="Flashcards" />
        <RoadmapCard title="Quizzes" /> */}
      </div>
    </DashboardWrapper>
  );
};

export default Courses;
