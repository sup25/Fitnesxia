import React from "react";

const Stats = () => {
  return (
    <div className="flex gap-2 mt-10 divide-x divide-gray-500">
      {Stat.map((item, index) => (
        <div key={index} className="flex flex-col items-start text-white px-4">
          <h1 className="md:text-4xl text-2xl font-bold">{item.count}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;

const Stat = [
  {
    text: "Expert Trainers",
    count: "105+",
  },
  {
    text: "Member Joined",
    count: "970+",
  },
  {
    text: "Fitness Program",
    count: "135+",
  },
];
