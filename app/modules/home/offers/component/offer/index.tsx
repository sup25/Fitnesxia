import React from "react";
import { Options } from "./Options";

const Offer = () => {
  return (
    <div className="flex w-full flex-wrap justify-between gap-2 mt-16">
      {Options.map((option, index) => (
        <div
          key={index}
          className={`flex flex-col items-start gap-5 md:max-w-[300px] max-w-full p-5 rounded-lg ${
            option.active ? "bg-[#FF662D]" : "bg-[#464646]"
          }`}
        >
          {option.icon}
          <h3 className="text-white text-2xl font-bold ">{option.heading}</h3>
          <p className="text-white text-base text-left">{option.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Offer;
