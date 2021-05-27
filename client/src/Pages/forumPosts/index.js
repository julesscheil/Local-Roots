import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ForumCard from '../../components/ForumCard/index'

const Post = () => {

  return (
    <div className="everything">
    <Container>
      <Row>
      <h2>People are talking about...</h2>
      <ForumCard />
      </Row>
    </Container>
    </div>
  );
};

export default Post;
