import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";
import plant from "../../images/plantspic.png";
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
      const id=sale.sale_post_id;
      // console.log(id);
     const filtered= comments.filter(comment => comment.sale_post_id === id).map((mapped)=>{
       return (
         <div className="container">
         <div>{mapped.description} </div>
         <div>--------------------</div>
         </div>
       )
        
     })
      
      return (
         
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={plant} alt="Logo" />
        <Card.Body>
          <Card.Title>{sale.title}</Card.Title>
          <h4>{sale.location}</h4>
          <Card.Text>
            {sale.description}
            {sale.createdAt}
          </Card.Text>
          <Button variant="success">Inquire</Button>
          <h4>Inquiries</h4>
          {filtered}
        </Card.Body>
      </Card>
        );
      })
      // console.log(filtered, "filter");
          
        }
        </Row>
      </Container>
  );
}

export default ForSaleCard;

