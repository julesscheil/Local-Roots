import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";
import plant from "../../images/plantspic.png";
import { Container, Row, Col } from "react-bootstrap";

function ForSaleCard(props) {
  const [sales, setSales] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    API.getSales(sales)
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => console.log(err));
    API.getForSaleComment(comments)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleComment = (postId) => {
    API.createSaleComment({ description: newComment, user_id: props.user_id, sale_post_id: postId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setNewComment("");
  };

  const handleFavorite = (postId) => {
    API.newFavorite({ sale_post_id: postId, user_id: props.user_id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        {sales.map((sale) => {
          const id = sale.sale_post_id;
          // console.log(id);
          const filtered = comments
            .filter((comment) => comment.sale_post_id === id)
            .map((mapped) => {
              return (
                <div className="container">
                  <div>{mapped.description} </div>
                  <div>--------------------</div>
                </div>
              );
            });
          return (
            <Card style={{ width: "18rem" }}>
              <Button onClick={() => handleFavorite(sale.sale_post_id)}>Save</Button>
              <Card.Img variant="top" src={plant} alt="Logo" />
              <Card.Body>
                <Card.Title>{sale.title}</Card.Title>
                <h4>{sale.location}</h4>
                <Card.Text>
                  {sale.description}
                  {sale.createdAt}
                </Card.Text>
                <form onSubmit={() => handleComment(sale.sale_post_id)}>
                  <input
                    type="text"
                    // value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></input>
                  <Button variant="success" type="submit">
                    Inquire
                  </Button>
                </form>
                <h4>Inquiries</h4>
                {filtered}
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

export default ForSaleCard;
