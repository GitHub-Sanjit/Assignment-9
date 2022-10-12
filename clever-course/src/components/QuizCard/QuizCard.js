import React from "react";
import Option from "../Option/Option";
import "./QuizCard.css";

const QuizCard = ({ question }) => {
  //   const quiz = useLoaderData();
    console.log(question);

  return (
    <div className="quiz-card">
      <div>
        <h4 className="question">Quiz : {question.question}</h4>
      </div>
      {question.options.map((option) => {
        
        return <Option key={option.id} option={option}></Option>;
      })}
    </div>
  );
};

export default QuizCard;
