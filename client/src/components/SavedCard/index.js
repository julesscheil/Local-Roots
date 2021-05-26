import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const Favorites = () => {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    API.getFavorites(favorites)
      .then((res) => {
        setfavorites(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row>
        {favorites.map((favorite) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <h4>{favorite.user_id}</h4>
                <Card.Text>{favorite.sale_post_id}</Card.Text>
                <Button variant="primary">Inquire</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favorites;
