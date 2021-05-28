import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const Post = () => {
  const [forum, setForum] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    API.getForumPost(forum)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
    API.getForSaleComment(comments)
      .then((res) => {git 
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row>
        {forum.map((forums) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <h4>{forums.title}</h4>
                <Card.Text>{forums.description}</Card.Text>
                <Button variant="primary">Inquire</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Post;
