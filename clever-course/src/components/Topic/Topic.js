import React from "react";

const Topic = ({ name, id, logo }) => {
  // console.log(logo, name);
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <h1>{name}</h1>
      <button id={id}>Start Practice</button>
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default Topic;
