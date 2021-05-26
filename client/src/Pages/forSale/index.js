import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const Sale = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    API.getSales(sales)
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
console.log(sales)
  return (
    <Container>
      <Row>
        {sales.map((sale) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={sale.image} />
              <Card.Body>
                <h4>{sale.title}</h4>
                <Card.Title>{sale.location}</Card.Title>
                <Card.Text>{sale.description}</Card.Text>
                <Button variant="primary">Inquire</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Sale;
