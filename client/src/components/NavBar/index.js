import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, Navbar, FormControl, Button} from "react-bootstrap";
import logo from './images/lrlogo2.JPEG';
import "./style.css";


function NavComponent(props) {

  return (
    <Router>

<Navbar bg="light" variant="light">
<Nav className="mr-auto">
<a className="navbar-brand" href="/">
    <img src={logo} width="70" height="70" alt=""/>
  </a>
  <Navbar.Brand href="#home">Local Roots</Navbar.Brand>
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/forum">Forum</Nav.Link>
  <Nav.Link href="/favorites">Favorites</Nav.Link>
  <Nav.Link href="/forsale">For Sale</Nav.Link>
  
  <Button  onClick={props.handleLogout}>Logout</Button>

</Nav>
</Navbar>
</Router>
  );
}

export default NavComponent;