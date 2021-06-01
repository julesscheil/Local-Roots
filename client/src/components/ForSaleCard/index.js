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
    API.createSaleComment({
      description: newComment,
      user_id: props.user_id,
      sale_post_id: postId,
    })
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
              console.log(mapped);
              return (
                <div>
                  <div>{mapped.description} </div>
                  <div className="text-right">-{mapped["user.name"]}</div>
                </div>
              );
            });
          return (
            <Card className="p-2 m-1" style={{ width: "18rem"}}>
              <div className="text-right">
                <Button
                  variant="outline-success"
                  style={{ width: "80px", height: "auto" }}
                  onClick={() => handleFavorite(sale.sale_post_id)}
                >
                  Save
                </Button>
              </div>
              <Card.Img
                variant="top"
                src={plant}
                alt="Logo"
                style={{ width: "270px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>{sale.title}</Card.Title>
                <Card.Text>
                  <p>{sale.description}</p>
                  <p>
                    {/* Category: <span style={{color:"green", fontWeight:"bolder"}}>{sale.category}</span> */}
                    {/* <br/> */}
                    Location:{" "}
                    <span style={{ color: "green", fontWeight: "bolder" }}>
                      {sale.location}
                    </span>
                  </p>
                </Card.Text>
                <div>
                  <form onSubmit={() => handleComment(sale.sale_post_id)}>
                    <input
                      type="text"
                      placeholder="Type a comment here..."
                      onChange={(e) => setNewComment(e.target.value)}
                      className="form-control"
                    ></input>
                    <Button variant="success" type="submit">
                      I'm interested
                    </Button>
                  </form>
                </div>
                <br />
                <p style={{ fontSize: "20px" }}>Inquiries</p>
                <div>
                  <p>{filtered}</p>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

export default ForSaleCard;
