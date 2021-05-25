import React, { useState } from "react";
import API from "../../utils/API";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    API.userLogin({ email: email, password: password })
      .then((res) => console.log(res))
      .then(setLoggedIn(true))
      .catch((err) => console.log(err));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    API.userSignup({ email: email, password: password })
    .then((res) => console.log(res))
    .then(setLoggedIn(true))
    .catch((err) => console.log(err));
  }

  return (
    <div>
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
      <h1>Signup Form</h1>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Home;
