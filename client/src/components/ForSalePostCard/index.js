import React, {useState} from "react";
import { Container, Row, Col, Button, DropdownButton } from "react-bootstrap";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown'

const Sale = () => {


  const [category,setCategory]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setCategory(e)
  };

  return (
    
        <div className="container">
        
          <form id="new-post-form" className="card-body">
            <label className="form-label" for="post-title">Title</label>
            <input type="text" name="post-title" className="form-input" />

            <label className="form-label" for="post-body">Content</label>
            <textarea name="post-body" className="form-input"></textarea>

            <div class="dropdown">
              <DropdownButton 
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

            <label className="form-label" for="post-title">Location</label>
            <input type="text" name="post-title" className="form-input" />
            <Button type="submit" className="btn">Create</Button>
          </form>
        </div>
  );
};

export default Sale;
