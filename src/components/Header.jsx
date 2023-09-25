import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/header.css";
import { AuthContext } from "../main";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const homeClickHandler = () => {
    navigate("/");
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setIsAuth(false);
      toast.success("Logged Out Successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav>
      <h2 onClick={homeClickHandler} style={{ cursor: "pointer" }}>
        NewsWave
      </h2>
      {isAuth && (
        <div className="weather-info">
          Clear 27°C
          <br />
          Patna
        </div>
      )}
      {isAuth && (
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Your City/State"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
      )}
      {isAuth ? (
        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          <h2>Log Out</h2>
        </div>
      ) : (
        <Link to="/login">
          <h2>Log In</h2>
        </Link>
      )}
    </nav>
  );
}

export default Header;
