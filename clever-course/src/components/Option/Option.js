import React from "react";
import "./Option.css";

const Option = ({ option,onclick }) => {
    console.log(onclick);
  return (
    <div className="option">
      <label onClick={onclick}>
        <input type="radio" value={option} name="quiz" />
        {option}
      </label>
    </div>
  );
};

export default Option;
