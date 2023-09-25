import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <h2>News Room</h2>
      <div className="weather-info">
        Clear 27°C
      <br />Patna
        {/* <img src="https://img.icons8.com/?size=48&id=85353&format=png" alt="Location logo" />Patna */}
      </div>
      <form action="">
        <input type="text" placeholder="Search Your City/State"  /> 
      </form>
      <h2>Log In</h2>
    </nav>
  );
}

export default Header;
