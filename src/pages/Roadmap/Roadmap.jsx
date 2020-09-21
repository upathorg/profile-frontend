import React from "react";

import Button from "../../components/DefaultButton";
import ProgressCard from "./ProgressCard";
import ProgressCircle from "./ProgressCircle";
import RoadmapMenu from "./RoadmapMenu";
import "./styles.css";

export default function Roadmap({ roadmaps = initData }) {
  const [currentRoadmap, setCurrentRoadmap] = React.useState(roadmaps[0]);

  return (
    <div className="container">
      <RoadmapMenu
        roadmaps={roadmaps}
        currentRoadmap={currentRoadmap}
        setCurrentRoadmap={(roadmap) => setCurrentRoadmap(roadmap)}
      />

      <p className="mb-4 font-weight-light">{currentRoadmap.description}</p>

      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-8 col-xlg-6 mb-4">
          <ProgressCircle {...currentRoadmap} />

          <Button className="mt-5 mx-auto" onClick={() => console.log("test")}>
            test your knowledge
          </Button>
        </div>

        <div className="col-12 offset-md-1 col-md-3 mx-auto px-0 row">
          {currentRoadmap.cards.map((card, i) => (
            <ProgressCard {...card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const initData = [
  {
    name: "RoadMap Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel repellendus cupiditate molestias, placeat enim pariatur maiores, inventore numquam repudiandae doloribus quam facere voluptatibus laboriosam, facilis accusantium consequatur suscipit? Dolorum.",
    progress: 33,
    level: "student",
    cards: [
      {
        title: "lessons",
        finished: 10,
        all: 15,
      },
      {
        title: "exercises",
        finished: 11,
        all: 15,
      },
      {
        title: "flash cards",
        finished: 12,
        all: 15,
      },
      {
        title: "quizzes",
        finished: 13,
        all: 15,
      },
    ],
  },
  {
    name: "RoadMap Name2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel repellendus cupiditate molestias, placeat enim pariatur maiores, inventore numquam repudiandae doloribus quam facere voluptatibus laboriosam, facilis accusantium consequatur suscipit? Dolorum.",
    progress: 68,
    level: "junior",
    cards: [
      {
        title: "lessons",
        finished: 10,
        all: 15,
      },
      {
        title: "exercises",
        finished: 11,
        all: 15,
      },
      {
        title: "flash cards",
        finished: 12,
        all: 15,
      },
      {
        title: "quizzes",
        finished: 13,
        all: 15,
      },
    ],
  },
];
