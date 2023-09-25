import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { AuthContext } from "../main";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import { db } from "../firebase";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuth, setId } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      if (user) {
        setIsAuth(true);
        toast.success("Logged In Successfully!");

        const uid = user.uid;
        setId(uid);
        localStorage.setItem("isAuthenticated", "true");

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setIsAuth(false);
    }
  };

  return (
    <div className="sign-in">
      <form className="login-form" onSubmit={submitHandler}>
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
