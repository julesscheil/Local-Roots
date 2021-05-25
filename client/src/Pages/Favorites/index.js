
import React from "react";

import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

import API from "../../utils/API";
import "./style.css";

function Saved(props) {



  // getSavedBooks = () => {
  //   API.getSavedBooks()
  //     .then((res) => {
  //       setBooks(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <Container>
      <Row>
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

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images/plant2.png" />
    <Card.Body>
      <Card.Title>Ficus</Card.Title>
      <Card.Text>
        Here's a taller plant I'd like to sell!
      </Card.Text>
      <Button variant="primary">Inquire</Button>
    </Card.Body>
  </Card>
  </Row>
  </Container>
  );
}

export default Saved;
