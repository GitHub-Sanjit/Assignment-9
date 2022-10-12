import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h2>Clever-Course</h2>
      <nav className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
