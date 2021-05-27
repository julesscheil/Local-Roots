import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, Navbar, FormControl, Button} from "react-bootstrap";
import logo from './images/lrlogo.jpeg';
import "./style.css";


function NavComponent(props) {

  return (
    <Router>

<Navbar bg="light" variant="light">

                        <div className="navlinks">
                          
  <Nav className="mr-auto">
<a className="navbar-brand" href="/">
    <img src={logo} width="70" height="70" alt=""/>
  </a>
  
  <Navbar.Brand href="#home"></Navbar.Brand>
 
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/forum">Forum</Nav.Link>
  <Nav.Link href="/favorites">Favorites</Nav.Link>
  <Nav.Link href="/forsale">For Sale</Nav.Link>
 
  <div className="button"
                        style={{
                          display: "flex",
                          justifyContent: "right",
                          alignItems: "center",
                        }}
                      >
  <Button variant="outline-success" onClick={props.handleLogout}>Logout</Button>
 </div>

</Nav>
</div>

</Navbar>
</Router>
  );
}

export default NavComponent;