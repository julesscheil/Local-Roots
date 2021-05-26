import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import FavoriteCard from '../../components/SavedCard/index'

const Post = () => {

  return (
    <Container>
      <Row>
      <h2>Your Favorite Greenery</h2>
      <FavoriteCard />
      </Row>
    </Container>
  );
};

export default Post;