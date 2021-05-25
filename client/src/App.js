import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaleCard from "./components/ForSaleCard/index";
import ForumCard from "./components/ForumCard/index";
import Favorites from "./Pages/Favorites/index";
import Sale from "./Pages/forSale/index";
import forumPosts from "./Pages/forumPosts/index";
import Login from "./Pages/Login/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h3><a href="/forsale">Sale</a></h3>
          <h3><a href="/forum">Forum</a></h3>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/forsale" component={Sale} />
          <Route exact path="/forum" component={forumPosts} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
