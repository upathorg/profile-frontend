import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./course.css";

const RoadmapCard = (props) => {
  return (
    <>
      <h5>{props.title}</h5>
      <hr />
      <CardDeck className="class-deck">
        {props.data
          ? props.data.map((data) => (
              <Card key={data.roadmapId} className="card">
                <Link to={`/${data.roadmapId}`}>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/07/what-is-javascript.jpg"
                  />
                </Link>
                <Card.Body>
                  <p>{data.name}</p>
                </Card.Body>
              </Card>
            ))
          : null}
      </CardDeck>
    </>
  );
};

export default RoadmapCard;
