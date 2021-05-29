import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./style.css";
import ForumCard from "../../components/ForumCard/index";
import NewPost from "../../components/ForumPostCard/index";

const Post = (props) => {
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
              <ForumCard user_id={props.user_id}/>
            </Card>
          </Row>
          <div className="container">
          <div className="post card">
            <div className="card-header">
              <h2>Create New Post</h2>
            </div>
            <NewPost user_id={props.user_id}/>
          </div>
        </div>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Post;
