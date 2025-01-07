import React from "react";
import { ChoiceOne } from "./choices";
import Button from "@/components/button";
import { GiCheckMark } from "react-icons/gi";

const Options = () => {
  return (
    <div className="mt-12 w-full flex flex-wrap gap-8 justify-center">
      {ChoiceOne.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-start px-10 py-7 rounded-lg w-full max-w-[350px]
            ${
              index === Math.floor(ChoiceOne.length / 2)
                ? "bg-[#FF662D] md:scale-110"
                : "bg-[#464646]"
            }
            `}
        >
          <h2 className={`text-white uppercase text-lg font-bold`}>
            {item.heading}
          </h2>
          <div className="flex flex-col gap-8 mt-10">
            <p className={`text-white md:text-5xl text-2xl font-semibold mt-2`}>
              {item.price}
              <span className="md:text-xl text:sm font-normal ml-3">
                / per month
              </span>
            </p>
            <p className={`flex items-center gap-2 mt-4 text-white capitalize`}>
              <GiCheckMark />
              {item.benifitOne}
            </p>
            <p className={`flex items-center gap-2 text-white capitalize`}>
              <GiCheckMark />
              {item.benifitTwo}
            </p>

            <p
              className={`flex items-center gap-2 capitalize ${
                index === 0 ? "text-gray-400 " : "text-white"
              }`}
            >
              <GiCheckMark />
              {item.benifitThree}
            </p>

            <p
              className={`flex items-center gap-2 capitalize ${
                index === 0
                  ? "text-gray-400 "
                  : index === ChoiceOne.length - 1
                  ? "text-gray-400"
                  : "text-white"
              }`}
            >
              <GiCheckMark />
              {item.benifitFour}
            </p>

            {item.benifitFive && (
              <p className={`flex items-center gap-2 text-white`}>
                <GiCheckMark />
                {item.benifitFive}
              </p>
            )}
          </div>
          <div className="flex w-full items-center justify-center mt-[38px] ">
            <Button
              className={`${
                index === Math.floor(ChoiceOne.length / 2)
                  ? "bg-white text-[#FF662D]"
                  : "bg-transparent border-white"
              } rounded-3xl border-2 w-[188px] hover:bg-[#FF662D] hover:text-white`}
            >
              Choose Plan
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
