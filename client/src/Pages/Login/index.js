import React, { useState } from "react";
import API from "../../utils/API";

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
    </div>
  );
};

export default Home;
