import React from "react";
import Option from "../Option/Option";
// import { useLoaderData } from "react-router-dom";

const QuizCard = ({ question }) => {
  //   const quiz = useLoaderData();

  return (
    <div>
      <div>
        <h2>Quiz : {question.question}</h2>
      </div>
      {question.options.map((option) => {
        console.log(option);
        return <Option key={option.id} option={option}></Option>;
      })}
    </div>
  );
};

export default QuizCard;
