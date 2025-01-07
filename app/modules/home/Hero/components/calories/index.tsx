import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import BarChartIcon from "./barchartIcon";
const Calories = () => {
  return (
    <div className="  h-fit bg-white p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <p>Todays Calories</p>
        <p className="text-xl font-semibold">150 Cal</p>
        <div className="flex items-end justify-between gap-4 w-full">
          <div className="flex flex-row items-center gap-1 w-full">
            <FaArrowTrendUp className="text-[#FF662D]" />
            <div className="text-sm text-[#FF662D] whitespace-nowrap">
              +2.75% <span className="text-black">This week</span>
            </div>
          </div>

          <BarChartIcon />
        </div>
      </div>
    </div>
  );
};

export default Calories;
