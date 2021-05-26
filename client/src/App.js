import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaleCard from "./components/ForSaleCard/index";
import ForumCard from "./components/ForumCard/index";
import { Nav, Form, Navbar, FormControl, Button} from "react-bootstrap";
import Favorites from "./Pages/Favorites/index";
import Sale from "./Pages/forSale/index";
import forumPosts from "./Pages/forumPosts/index";
import Home from "./Pages/Login/index";
import NoMatch from "./Pages/NoMatch/index"
import API from "./utils/API";
import "./App.css";



function App() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogout = (event) => {
  event.preventDefault();
  API.userLogout()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  setName("");
  setEmail("");
  setPassword("");
};

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
      <Button  onClick={handleLogout}>Logout</Button>
    </div>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form> */}
    </Nav>
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

