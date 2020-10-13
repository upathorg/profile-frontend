import React from "react";

import Basics from "./Basics";
import Educations from "./Educations";
import RoadmapList from "./RoadmapList";
import Tabs from "./Tabs";
import "./styles.scss";

export default function Profile({ roadmaps = initData }) {
  const [editMode, setEditMode] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0); // 0: Basics, 1: Educations
  const [selectedRoadmap, setSelectedRoadmap] = React.useState(0);

  const Contents = () => {
    switch (activeTab) {
      case 1:
        return <Educations editMode={editMode} setEditMode={setEditMode} />;
      default:
        return (
          <Basics
            editMode={editMode}
            setEditMode={setEditMode}
            roadmap={roadmaps[selectedRoadmap]}
          />
        );
    }
  };

  return (
    <section className="position-relative row mx-0 w-100 vh-100">
      <article className="col-12 col-lg-9">
        <header className="profile__content-header pt-4 px-4 pb-2">
          <h1>{editMode ? "Edit Profile" : "Profile"}</h1>

          <Tabs
            editMode={editMode}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </header>

        <div className="position-relative mx-2 mx-sm-5 mb-4 overflowY-scroll">
          <Contents />
        </div>
      </article>

      <aside className="col-lg-3 px-0">
        <RoadmapList
          roadmaps={roadmaps}
          selectedRoadmap={selectedRoadmap}
          setSelectedRoadmap={setSelectedRoadmap}
        />
      </aside>
    </section>
  );
}

const initData = [
  {
    name: "Roadmap Name 1",
    status: "completed",
    progress: 100,
    duration: "6 weeks",
  },
  {
    name: "Roadmap Name 2",
    status: "ongoing",
    progress: 68,
    duration: "8 weeks",
  },
];
