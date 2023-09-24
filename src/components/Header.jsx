import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <h2>News Room</h2>
      <form action="">
        <input type="text" placeholder="Search Your City/State"  /> 
      </form>
      <h2>Log In</h2>
    </nav>
  );
}

export default Header;
