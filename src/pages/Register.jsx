import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../main";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const { isAuth, setIsAuth,userLocation,setUserLocation } = useContext(AuthContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("User Created Successfully!");
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        location: location,
      });
      setIsAuth(true);
      setUserLocation(location);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <form className="register-form" onSubmit={submitHandler}>
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
          type="text"
          name="location"
          value={location}
          placeholder="Enter Your Location"
          required
          onChange={(e) => setLocation(e.target.value)}
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
