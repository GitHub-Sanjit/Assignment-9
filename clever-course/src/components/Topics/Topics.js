import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const topics = useLoaderData();

  return (
    <div className="topic-container">
      {/* <h1>This is Topics Page:{topics.data[1].name}</h1> */}
      {topics.data.map((topic) => (
        <Topic
          key={topic.id}
          total={topic.total}
          name={topic.name}
          id={topic.id}
          logo={topic.logo}
        ></Topic>
      ))}
    </div>
  );
};

export default Topics;
