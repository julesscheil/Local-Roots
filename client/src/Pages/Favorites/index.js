import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./style.css";
import FavoriteCard from '../../components/SavedCard/index'

const Post = () => {

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
      <h2> Your Favorite Greenery </h2>
     
      <FavoriteCard />
      </Card> 
      
      </Row>
      </CardGroup>
    </Container>
    </div>
  );
};

export default Post;