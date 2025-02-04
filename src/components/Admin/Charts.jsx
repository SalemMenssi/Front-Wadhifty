import React from "react";
import "./tool-tip.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Jan", Users: 2400, Jobs: 4000 },
  { name: "Feb", Users: 1398, Jobs: 3000 },
  { name: "Mar", Users: 9800, Jobs: 2000 },
  { name: "Apr", Users: 3908, Jobs: 2780 },
  { name: "May", Users: 4800, Jobs: 1890 },
  { name: "Jun", Users: 3800, Jobs: 2390 },
  { name: "Jul", Users: 4300, Jobs: 3490 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Users: ${payload[0].value}`}</p>
        <p className="intro">{`Jobs: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export const UsersChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line
        type="monotone"
        dataKey="Users"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Jobs" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export const JobsChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Area
        type="monotone"
        dataKey="Jobs"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorJobs)"
      />
      <Area
        type="monotone"
        dataKey="Users"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUsers)"
      />
    </AreaChart>
  </ResponsiveContainer>
);
