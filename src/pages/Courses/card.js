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
        {data.results.map((data) => (
          <Card key={data.id} className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={props.image ? props.image : data.image}
            />
            <Card.Body>
              <p>{data.text}</p>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default RoadmapCard;
