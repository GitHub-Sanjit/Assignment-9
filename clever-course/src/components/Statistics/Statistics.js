import React from "react";
import { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  const newData = {};
  console.log(data);
  // data.map((d) => {
  //   newData.name = d.name,

  // });
  // console.log(newData);

  const chartData = [
    {
      name: "React",
      total: 8,
    },
    {
      name: "JavaScript",
      total: 9,
    },
    {
      name: "CSS",
      total: 8,
    },
    {
      name: "Git",
      total: 11,
    },
  ];
  return (
    <div>
      <LineChart width={800} height={500} data={chartData}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      </LineChart>
    

    </div>
  );
};

export default Statistics;
