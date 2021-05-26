import React from "react";
// import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
// import API from "../../utils/API";
import "./style.css";
import ForSaleCard from '../../components/ForSaleCard/index'
const Sale = () => {
 
  return (
    <Container>
      <Row><h2>Plants For Sale</h2>
      <ForSaleCard />
        {/* {sales.map((sale) => {
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
        })} */}
      </Row>
    </Container>
  );
};

export default Sale;
