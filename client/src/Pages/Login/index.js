import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "../Login/style.css";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    API.userSignup({ name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    API.userLogin({ email, password })
      .then((res) => {
        console.log(res);
        // props.setLoggedIn(true);
      })
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Container>
  );
};

export default Home;
