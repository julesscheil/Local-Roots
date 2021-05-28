import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./style.css";
import ForumCard from "../../components/ForumCard/index";

const Post = () => {
  return (
    <div className="everything">
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
              <div className="title">
                <h2>People are talking about...</h2>
              </div>
              <ForumCard />
            </Card>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Post;
