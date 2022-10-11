import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  topics.data.map((topic) => {
    console.log(topic.name);
    console.log(topic.id);
    console.log(topic.logo);
  });

  return (
    <div>
      <h1>This is Topics Page:{topics.data[1].name}</h1>
      {topics.data.map((topic) => (
        <Topic
          key={topic.id}
          name={topic.name}
          id={topic.id}
          logo={topic.logo}
        ></Topic>
      ))}
    </div>
  );
};

export default Topics;
