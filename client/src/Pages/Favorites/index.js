import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./style.css";
import FavoriteCard from '../../components/SavedCard/index'

const Favorites = (props) => {

  console.log(props.user_id);
  return (
    <div >
    <Container>
      <CardGroup >
      <Row>
        
        <Card 
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      > 
     
      <h2>Favorites</h2>
      <FavoriteCard />
      </Card> 
      
      </Row>
      </CardGroup>
    </Container>
    </div>
  );
};

export default Favorites;