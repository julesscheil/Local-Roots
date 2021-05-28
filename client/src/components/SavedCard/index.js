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
  console.log(favorites);
   return (
    <Container>
      <Row className="row+">
        {favorites.map((favorite) => {
          return (
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                
                <h3>{favorite.user_id}</h3>
                
                <Card.Text>{favorite.sale_post_id}</Card.Text>
                <Button variant="success">Inquire</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favorites;
