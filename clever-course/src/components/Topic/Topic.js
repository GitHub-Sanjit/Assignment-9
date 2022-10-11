import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ name, id, logo }) => {
  // console.log(logo, name);
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <h1>
        <Link to={`/topic/${id}`}>{name}</Link>
      </h1>
      <button id={id}>Start Practice</button>
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default Topic;
