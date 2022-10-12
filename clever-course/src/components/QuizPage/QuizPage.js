import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import "./QuizPage.css";

const QuizPage = () => {
  const quiz = useLoaderData();
  // console.log(quiz.data);
  return (
    <div className="quiz-page">
      <h1 className="text-center">Quiz of {quiz.data.name}</h1>
      <div className="all-quiz">
        {quiz.data.questions.map((q) => {
          // console.log(q);
          return <QuizCard key={q.id} question={q}></QuizCard>;
        })}
      </div>
    </div>
  );
};

export default QuizPage;
