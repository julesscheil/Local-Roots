import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";

function ForSaleCard() {
  const [sales, setSales] = useState([]);
  const [comments, setComments]=useState([]);

  useEffect(() => {
    API.getSales(sales)
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => console.log(err));
  API.getForSaleComment(comments)
  .then((res)=> {
    setComments(res.data)
  })
  .catch((err)=> console.log(err))
    }, []);
    
  console.log(sales);
  console.log(comments, "comment");

  // const filteredComment = [];

  return (
    <Container>
      <Row>
    {sales.map((sale) => {
          return (
// {filteredComment.map()}
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/plantspic.png" />
  <Card.Body>
    <Card.Title>{sale.title}</Card.Title>
    <h4>{sale.location}</h4>
    <Card.Text>
      {sale.description}
      {sale.createdAt}
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

export default ForSaleCard;

