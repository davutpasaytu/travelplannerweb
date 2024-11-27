import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/plan">Plan</Link>
      <Link to="/saved">Saved</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cat">Cat</Link>
    </nav>
  );
}

export default Navbar;
