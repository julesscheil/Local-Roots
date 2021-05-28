import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import SaleCard from "./components/ForSaleCard/index";
import ForumCard from "./components/ForumCard/index";
import { Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import Favorites from "./Pages/Favorites/index";
import Sale from "./Pages/forSale/index";
import forumPosts from "./Pages/forumPosts/index";
import NoMatch from "./Pages/NoMatch/index";
import Navbar from "./components/NavBar";
import API from "./utils/API";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    API.checkLogin({})
      .then((res) => {
        console.log(res);
        setLoggedIn(res.data.logged_in);
        setUserId(res.data.user_id);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSignup = (event) => {
    event.preventDefault();
    API.userSignup({ name, email: newEmail, password: newPassword })
      .then((res) => {
        console.log(res);
        setLoggedIn(res.data.logged_in);
        setUserId(res.data.user_id);
        history.push("/forsale");
      })
      .catch((err) => console.log(err));
    setName("");
    setNewEmail("");
    setNewPassword("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    API.userLogin({ email, password })
      .then((res) => {
        console.log(res);
        setLoggedIn(res.data.logged_in);
        setUserId(res.data.user_id);
        history.push("/forsale");
      })
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  const handleLogout = (event) => {
    event.preventDefault();
    API.userLogout()
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
        setUserId(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loggedIn && <Navbar handleLogout={handleLogout} />}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Container>
              <div className="form-group">
                <h1>Signup Form</h1>
                <form onSubmit={handleSignup}>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit">Signup</button>
                </form>
                <h1>Login Form</h1>
                <div className="form-group">
                  <form onSubmit={handleLogin}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      type="password"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                  </form>
                </div>
              </div>
            </Container>
          </Route>
          <Route exact path="/forsale" component={Sale} />
          <Route exact path="/forum" component={forumPosts} />
          <Route exact path="/favorites">
            <Favorites user_id={userId} />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
