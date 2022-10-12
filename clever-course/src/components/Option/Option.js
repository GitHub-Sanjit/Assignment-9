import React from "react";
import "./Option.css";

const Option = ({ option }) => {
  //   console.log(option, ans);
  return (
    <div className="option">
      <label>
        <input type="radio" value={option} name="quiz" />
        {option}
      </label>
    </div>
  );
};

export default Option;
