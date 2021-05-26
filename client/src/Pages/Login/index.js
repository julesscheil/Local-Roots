import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import "../Login/style.css"

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    API.userLogin({ email: email, password: password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
    {/* <div className="form-group">
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div> */}

{/* <form>

<h3>Log in</h3> */}

<div className="form-group">
    <label>Login</label>
    <input type="email" className="form-control"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p>
{/* </form> */}
</Container>
  );
};

export default Home;