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
                 <div>
                   <div>{mapped.description} </div>
                   <div className="text-right">-{mapped["user.name"]}</div>
                 </div>
               );
             });
          return (
            <Card style={{width: "18rem"}} className="p-2 m-1">
              <Card.Body>
              <Card.Title style={{fontSize:"25px"}}>{forums.title}</Card.Title>
                <Card.Text>
                  <p>{forums.description}</p>
                  </Card.Text>
              </Card.Body>
              <form onSubmit={() => handleComment(forums.forum_post_id)}>
                  <input
                    type="text"
                    placeholder="Type a comment here..."
                    className="form-control"
                    onChange={(e) => setNewComment(e.target.value)}
                  ></input>
                  <Button variant="success" type="submit">
                    Post Comment
                  </Button>
                </form>
                <br/>
                <p style={{fontSize:"20px"}}>Comments</p>
                <div><p>{filtered}</p></div>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Post;
