import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, Navbar, FormControl, Button} from "react-bootstrap";
import "./style.css";


function NavComponent(props) {

  return (
    <Router>

<Navbar bg="light" variant="light">
<Navbar.Brand href="#home">Local Roots</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/forum">Forum</Nav.Link>
  <Nav.Link href="/favorites">Favorites</Nav.Link>
  <Nav.Link href="/forsale">For Sale</Nav.Link>
  <div className="btn btn-outline-secondary">
  <Button  onClick={props.handleLogout}>Logout</Button>
</div>
</Nav>
</Navbar>
</Router>
  );
}

export default NavComponent;