import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaleCard from "./components/ForSaleCard/index";
import ForumCard from "./components/ForumCard/index";
import { Nav, Form, FormControl, Button} from "react-bootstrap";
import Favorites from "./Pages/Favorites/index";
import Sale from "./Pages/forSale/index";
import forumPosts from "./Pages/forumPosts/index";
import Home from "./Pages/Login/index";
import NoMatch from "./Pages/NoMatch/index"
import Navbar from "./components/NavBar"
import API from "./utils/API";
import "./App.css";



function App() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loggedIn, setLoggedIn] = useState(true);

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
      {loggedIn && <Navbar handleLogout = {handleLogout}/>}
      <div className="App">
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} setLoggedIn={setLoggedIn} />}/>
          <Route exact path="/forsale" component={Sale} />
          <Route exact path="/forum" component={forumPosts} />
          <Route exact path="/favorites" component={Favorites} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
