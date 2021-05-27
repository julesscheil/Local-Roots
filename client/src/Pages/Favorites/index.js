import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import FavoriteCard from '../../components/SavedCard/index'

const Post = () => {

  return (
    <div className="everything">
    <Container>
      <Row>
      <h2>Your Favorite Greenery</h2>
      <FavoriteCard />
      </Row>
    </Container>
    </div>
  );
};

export default Post;