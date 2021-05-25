import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Search from "./components/search/index";
// import Saved from "./components/saved/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h3><a href="/">Search</a></h3>
          <h3><a href="/saved">Saved</a></h3>
        </nav>
        {/* <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
