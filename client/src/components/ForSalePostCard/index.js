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

const NewSale = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSelect = (e) => {
    console.log(e);
    setCategory(e);
  };

  const handlePost = (event) => {
    event.preventDefault();
    API.createSale({
      title: title,
      description: description,
      category: category,
      location: location,
      user_id: props.user_id,
    })
      .then((res) => {
        console.log(res);
        setCategory("");
        setTitle("");
        setDescription("");
        setLocation("");
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
            {/* <div className="text-center">
            
              <DropdownButton
                variant="outline-success"
                alignRight
                title="Category"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="Indoor">Indoor</Dropdown.Item>
                <Dropdown.Item eventKey="Outdoor">Outdoor</Dropdown.Item>
                <Dropdown.Item eventKey="Her">Herb</Dropdown.Item>
                <Dropdown.Item eventKey="Veggie">Veggie</Dropdown.Item>
              </DropdownButton>
              </div> */}
            <label style={{fontSize:"25px"}} for="post-title">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLocation(e.target.value)}
            />
            <br/>
            <div className="text-center">
            <Button variant="success" type="submit" className="btn">
              Create New Listing
            </Button></div>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default NewSale;
