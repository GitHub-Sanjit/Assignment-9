import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizPage = () => {
  const quiz = useLoaderData();
  console.log(quiz.data);
  return (
    <div>
      <h2>Quiz Page</h2>
    </div>
  );
};

export default QuizPage;
