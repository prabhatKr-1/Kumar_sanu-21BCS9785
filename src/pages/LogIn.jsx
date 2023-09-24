import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in">
      <form className="login-form">
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign In" />
        <h3>
          <span style={{ margin: 10, fontWeight: "normal" }}>New Here?</span>
          <span>
            <Link to="/register">Sign Up</Link>
          </span>
        </h3>
      </form>
    </div>
  );
}

export default LogIn;
