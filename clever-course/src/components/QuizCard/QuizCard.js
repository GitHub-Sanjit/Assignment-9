import React from "react";
import { FiEye } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Option/Option";
import "./QuizCard.css";

const QuizCard = ({ question }) => {
  //   const quiz = useLoaderData();
  const correctAns = question.correctAnswer;
  const clickHandler = (option) => {
    if (correctAns === option) {
      return toast("Correct Answer");
    }
    return toast("Wrong Answer");
  };
  console.log(correctAns);
  return (
    <div className="quiz-card">
      <div className="d-flex">
        <h4 className="question">Quiz : {question.question}</h4>
        <FiEye
          className="icon"
          onClick={() => {
            toast(`${correctAns}`);
          }}
        ></FiEye>
      </div>
      <ToastContainer />
      <div className="options">
        {question.options.map((option) => {
          return (
            <Option
              key={option.id}
              option={option}
              clickHandler={() => clickHandler(option)}
            ></Option>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
