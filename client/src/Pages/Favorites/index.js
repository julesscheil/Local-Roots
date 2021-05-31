import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./style.css";
import FavoriteCard from "../../components/SavedCard/index";

const Favorites = (props) => {
  return (
    <div>
      <Container>
        <CardGroup>
          <Row>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Favorites</h2>
              <FavoriteCard user_id={props.user_id}/>
            </Card>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Favorites;
