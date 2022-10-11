import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/topics">Topics</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;
