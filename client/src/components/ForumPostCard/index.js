import React, { useState } from "react";
import {
  Container,
  // Row,
  // Col,
  Button,
  // DropdownButton,
  Card,
} from "react-bootstrap";
import "./style.css";
// import Dropdown from "react-bootstrap/Dropdown";
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
        >
          <form id="new-post-form" onSubmit={handlePost}>
            <div >
              <label for="post-title" style={{fontSize:"25px"}}>
              Title
              </label>
              <input
                type="text"
                name="post-title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div >
            <label style={{fontSize:"25px"}} for="post-body">
              Content
            </label>
            <textarea
              name="post-body"
              className="form-control"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            </div>
          <br/>
            <div className="text-center">
            <Button variant="success" type="submit" className="btn">
              Create New Post
            </Button></div>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default NewPost;
