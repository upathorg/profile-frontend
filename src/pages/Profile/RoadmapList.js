import React from "react";
import styled from "styled-components";

export default function RoadmapList({
  selectedRoadmap,
  setSelectedRoadmap,
  roadmaps,
}) {
  return (
    <div className="profile-roadmap__root d-flex flex-column text-center">
      {roadmaps.length > 0 ? (
        roadmaps.map(({ name, status }, i) => (
          <Card
            key={`roadmap-${i}`}
            onClick={() => setSelectedRoadmap(i)}
            active={selectedRoadmap === i}
            className="profile-roadmap__card d-flex flex-column justify-content-center"
          >
            <p className="m-0 font-weight-bold">{name}</p>
            <p className="m-0 font-weight-light text-capitalize">
              Status: {status}
            </p>
          </Card>
        ))
      ) : (
        <p>No roadmap has been created</p>
      )}

      <div className="mt-4">
        <span className="profile-roadmap__add-roadmap mr-2">
          Add A New Roadmap
        </span>

        <button
          onClick={() => console.log("add a new roadmap")}
          className="profile-roadmap__plus-btn"
        >
          <i className="material-icons profile-roadmap__plus">add</i>
        </button>
      </div>
    </div>
  );
}

const Card = styled.div`
  background: ${({ active }) => (active ? "#FFC107" : "#eaf7f9")};
`;
