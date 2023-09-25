import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value); 
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  const homeClickHandler = () => {
    navigate('/');
  };

  return (
    <nav>
      <h2 onClick={homeClickHandler} style={{cursor:"pointer"}}>News Room</h2>
      <div className="weather-info">
        Clear 27°C
        <br />Patna
      </div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Your City/State"
          value={search} 
          onChange={handleSearchChange}
        />
      </form>
      <h2>Log In</h2>
    </nav>
  );
}

export default Header;
