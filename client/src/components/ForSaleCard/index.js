import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";

function Plant() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    API.getSales(sales)
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row>
    {sales.map((sale) => {
          return (

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/plantspic.png" />
  <Card.Body>
    <Card.Title>{sale.title}</Card.Title>
    <h4>{sale.location}</h4>
    <Card.Text>
      {sale.description}
    </Card.Text>
    <Button variant="primary">Inquire</Button>
  </Card.Body>
</Card>
   );
  })}
  </Row>
</Container>
  );
}

export default Plant;

