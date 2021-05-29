import React, {useState} from "react";
import { Container, Row, Col, Button, DropdownButton, Card } from "react-bootstrap";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown'
import API from "../../utils/API";

const NewSale = (props) => {

  const [category, setCategory]=useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSelect=(e)=>{
    console.log(e);
    setCategory(e)
  };

  const handlePost = (event) => {
    event.preventDefault();
    API.createSale({ title: title, description: description, category: category, location: location, user_id: props.user_id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Card>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        
          <form id="new-post-form" className="card-body" onSubmit={handlePost}>
            <label className="form-label" for="post-title">Title</label>
            <input type="text" name="post-title" className="form-input" onChange={(e) => setTitle(e.target.value)}/>

            <label className="form-label" for="post-body">Content</label>
            <textarea name="post-body" className="form-input" onChange={(e) => setDescription(e.target.value)}></textarea>

            <div class="dropdown">
              <DropdownButton variant="success" 
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
            </div>

            <label className="form-label" for="post-title" >Location</label>
            <input type="text" name="post-title" className="form-input" onChange={(e) => setLocation(e.target.value)}/>
            <Button variant="success" type="submit" className="btn">Create</Button>
          </form>
        </div>
        </Card>
        </Container>
  );
};

export default NewSale;
