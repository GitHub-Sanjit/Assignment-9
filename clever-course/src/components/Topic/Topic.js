import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ name, id, logo, total }) => {
  console.log(total);
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <h1>{name}</h1>
      <p>Total : {total}</p>
      <button id={id}>
        <Link to={`/topic/${id}`}>Start Practice</Link>
      </button>
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default Topic;
