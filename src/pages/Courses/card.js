import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./course.css";
import data from "./roadmapData.json";

const RoadmapCard = (props) => {



  return (
    <>
      <h5>{props.title}</h5>
      <hr />
      <CardDeck className="class-deck">
        {props.data ? props.data.map((data) => (
          <Card key={data.roadmapId} className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={data.imageUrl}
            />
            <Card.Body>
              <p>{data.name}</p>
            </Card.Body>
          </Card>
        )) : null}
      </CardDeck>
    </>
  );
};

export default RoadmapCard;
