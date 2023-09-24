import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  return (
    <div className="sign-up">
      <form className="register-form">
        <h1>Sign Up</h1>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
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
          name="password"
          value={password}
          placeholder="Create Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="verifyPassword"
          value={verifyPassword}
          placeholder="Verify Password"
          required
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <input type="submit" value="Sign Up" />

        <h3>
          <span style={{ margin: 10, fontWeight: "normal" }}>
            Have an account?
          </span>
          <span>
            <Link to="/login">Sign In</Link>
          </span>
        </h3>
      </form>
    </div>
  );
}

export default Register;
