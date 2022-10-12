import React from "react";
import "./Statistics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
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
    <div className="statistics">
      <LineChart width={800} height={500} data={chartData}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      </LineChart>
    </div>
  );
};

export default Statistics;
