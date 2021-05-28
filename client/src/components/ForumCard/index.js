import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const Post = () => {
  const [forum, setForum] = useState([]);

  useEffect(() => {
    API.getForumPost(forum)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    
    <Container>
      
      <Row>
        {forum.map((forums) => {
          return (
            <Card style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center", width: "18rem" }}>
              <Card.Body>
                <h3>{forums.title}</h3>
                <Card.Text>{forums.description}</Card.Text>
                <Button variant="success">Inquire</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      
    </Container>
   
  );
};

export default Post;
