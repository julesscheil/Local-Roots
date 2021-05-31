import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";
import plant from "../../images/plantspic.png";

const FavoriteCard = (props) => {
  const [sales, setSales] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    API.getFavorites({ user_id: props.user_id })
    .then((res) => {
      const favorites = res.data.map(function(i) {
        return i.sale_post_id;
      });
      getSalesInfo(favorites);
    })
    .catch((err) => console.log(err));
  }, [props.user_id]);

  const getSalesInfo = (favoriteData) => {

    API.getFavoriteSales(favoriteData)
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => console.log(err));

    API.getForSaleComment(comments)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleComment = (postId) => {
    API.createSaleComment({ description: newComment, user_id: props.user_id, sale_post_id: postId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setNewComment("");
  };

  const handleDelete = (postId) => {
    API.removeFavorite({ sale_post_id: postId, user_id: props.user_id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row className="row+">
      {sales.map((sale) => {
          const id = sale.sale_post_id;
          const filtered = comments
            .filter((comment) => comment.sale_post_id === id)
            .map((mapped) => {
              return (
                <div>
                  <div>{mapped.description} </div>
                  <div className="text-right">-{mapped["user.name"]}</div>
                </div>
              );
            });
          return (
            <Card className="p-2 m-1">
              <div className="text-right">
              {/* <Button variant="outline-success"  style={{width:"80px" ,height:"auto"}} onClick={() => handleDelete(sale.sale_post_id)}>Remove</Button> */}
              </div>
              <Card.Img variant="top" src={plant} alt="Logo" style={{width:"300px", height:"auto"}}/>
              <Card.Body>
              <Card.Title>{sale.title}</Card.Title>
                <Card.Text>
                  <p>{sale.description}</p>
                  <p>
                  Location: <span style={{color:"green", fontWeight:"bolder"}}>{sale.location}</span></p>
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
                <br/>
                <p style={{fontSize:"20px"}}>Inquiries</p>
                <div><p>{filtered}</p></div>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default FavoriteCard;
