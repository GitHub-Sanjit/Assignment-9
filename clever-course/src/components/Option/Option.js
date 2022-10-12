import React from "react";

const Option = ({ option }) => {
//   console.log(option);
  return (
    <div>
      <label>
        <input type="radio" value={option} name="quiz" />
        {option}
      </label>
    </div>
  );
};

export default Option;
