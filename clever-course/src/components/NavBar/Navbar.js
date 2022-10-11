import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Clever-Course</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
