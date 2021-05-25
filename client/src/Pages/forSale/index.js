import React from "react";

import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import API from "../../utils/API";
import "./style.css";
const Sale = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/plantspic.png" />
          <Card.Body>
            <h4>Short Plants</h4>
            <Card.Title>Buckhead</Card.Title>
            <Card.Text>
              Here's a couple of short plants I'd like to sell!
            </Card.Text>
            <Button variant="primary">Inquire</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/plant2.png" />
          <Card.Body>
            <h4>Tall Plant</h4>
            <Card.Title>West Midtown</Card.Title>
            <Card.Text>Here's a taller plant I'd like to sell!</Card.Text>

            <Button variant="primary">Inquire</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/plant3.png" />
          <Card.Body>
            <h4>Other Plant</h4>
            <Card.Title>Downtown</Card.Title>
            <Card.Text>Ooooh, you want this plant!!</Card.Text>

            <Button variant="primary">Inquire</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Sale;
