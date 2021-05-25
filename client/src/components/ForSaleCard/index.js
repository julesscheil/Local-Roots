import React from "react";
import { ListGroup } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";

function Plant({ image, type, seller, description, location, Button }) {
  return (
    <ListGroup.Item>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{type}</h3>
          {seller && <h5 className="font-italic">{seller}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <Button className="btn btn-light">
              View
            </Button >
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {seller}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={type} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Plant;