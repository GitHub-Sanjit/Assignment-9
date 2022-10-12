import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const QuizPage = () => {
  const quiz = useLoaderData();
  // console.log(quiz.data);
  return (
    <div>
      <h2>Quiz of {quiz.data.name}</h2>
      {quiz.data.questions.map((q) => {
        // console.log(q);
        return <QuizCard key={q.id} question={q}></QuizCard>;
      })}
    </div>
  );
};

export default QuizPage;
