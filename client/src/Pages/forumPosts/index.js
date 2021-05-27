import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ForumCard from '../../components/ForumCard/index'

const Post = () => {

  return (
    <Container>
      <Row>
      <h2>People are talking about...</h2>
      <ForumCard />
      </Row>
    </Container>
  );
};

export default Post;
