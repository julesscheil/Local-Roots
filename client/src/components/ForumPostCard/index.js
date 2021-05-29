import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Card,
} from "react-bootstrap";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import API from "../../utils/API";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePost = (event) => {
    event.preventDefault();
    API.createForumPost({
      title: title,
      description: description,
      user_id: props.user_id,
    })
      .then((res) => {
        console.log(res);
        setTitle("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form id="new-post-form" className="card-body" onSubmit={handlePost}>
            <label className="form-label" for="post-title">
              Title
            </label>
            <input
              type="text"
              name="post-title"
              className="form-input"
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="form-label" for="post-body">
              Content
            </label>
            <textarea
              name="post-body"
              className="form-input"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <Button variant="success" type="submit" className="btn">
              Post
            </Button>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default NewPost;
