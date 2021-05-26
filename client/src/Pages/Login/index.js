import React, { useState } from "react";
import API from "../../utils/API";

const Home = () => {
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
      .then((res) => console.log(res))
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
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
