import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import FavoriteCard from '../../components/SavedCard/index'

const Favorites = (props) => {

  console.log(props.user_id);
  return (
    <Container>
      <Row>
      <h2>Favorites</h2>
      <FavoriteCard />
      </Row>
    </Container>
  );
};

export default Favorites;