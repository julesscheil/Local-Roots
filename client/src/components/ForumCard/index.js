import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function Post(props)  {
  const [forum, setForum] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    API.getForumPost(forum)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
      API.getForumComment(comments)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleComment = (postId) => {
    API.createForumComment({ description: newComment, user_id: props.user_id, forum_post_id: postId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setNewComment("");
  };

  return (
    <Container>
      <Row>
        {forum.map((forums) => {
           const id = forums.forum_post_id;
          //  console.log(id);
           const filtered = comments.filter((comment) => comment.forum_post_id === id).map((mapped) => {
            // console.log(mapped)  
            return (
                 <div className="container">
                   <div>{mapped.description} </div>
                   <div>--------------------</div>
                 </div>
               );
             });
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <h4>{forums.title}</h4>
                <Card.Text>{forums.description}</Card.Text>
                <Button variant="primary">Inquire</Button>
              </Card.Body>
              <form onSubmit={() => handleComment(forums.forum_post_id)}>
                  <input
                    type="text"
                    onChange={(e) => setNewComment(e.target.value)}
                  ></input>
                  <Button variant="success" type="submit">
                    Post Comment
                  </Button>
                </form>
                <h4>Comments</h4>
                {filtered}
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Post;
