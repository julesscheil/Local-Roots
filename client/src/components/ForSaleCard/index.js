import React from "react";

import { Card } from "react-bootstrap";
import "./style.css";

function Plant({ image, type, seller, description, location, Button }) {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/plantspic.png" />
  <Card.Body>
    <Card.Title>Ficus</Card.Title>
    <Card.Text>
      Here's a Ficus I'd like to sell!
    </Card.Text>
    <Button variant="primary">Inquire</Button>
  </Card.Body>
</Card>
  );
}

export default Plant;

