import React from "react";
import { FiEye } from "react-icons/fi";
import Option from "../Option/Option";
import "./QuizCard.css";

const QuizCard = ({ question }) => {
  //   const quiz = useLoaderData();
  console.log(question);

  return (
    <div className="quiz-card">
      <div className="d-flex">
        <h4 className="question">Quiz : {question.question}</h4>
        <FiEye className="icon"></FiEye>
      </div>
      <div className="options">
        {question.options.map((option) => {
          return <Option key={option.id} option={option}></Option>;
        })}
      </div>
    </div>
  );
};

export default QuizCard;
