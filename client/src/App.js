import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaleCard from "./components/ForSaleCard/index";
import ForumCard from "./components/ForumCard/index";
import { Nav, Form, Navbar, FormControl, Button} from "react-bootstrap";
import Favorites from "./Pages/Favorites/index";
import Sale from "./Pages/forSale/index";
import forumPosts from "./Pages/forumPosts/index";
import Home from "./Pages/Login/index";
import NoMatch from "./Pages/NoMatch/index"
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/forum">Forum</Nav.Link>
      <Nav.Link href="/favorites">favorites</Nav.Link>
      <Nav.Link href="/forsale">For Sale</Nav.Link>
      <Nav.Link href="#pricing">Logout</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form> */}
  </Navbar>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forsale" component={Sale} />
          <Route exact path="/forum" component={forumPosts} />
          <Route exact path="/favorites" component={Favorites} />
          <Route  component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
