import React from "react";
import { RiFireFill } from "react-icons/ri";
const BurnRate = () => {
  return (
    <div className="absolute lg:bottom-20 bottom-10 left-0 z-[99999] p-2 h-fit flex items-center gap-4 bg-white rounded-lg">
      <RiFireFill size={30} className="text-red-500" />
      <div className="flex flex-col">
        <p className="font-semibold">24%</p>
        <p className="">Flat Burning</p>
      </div>
    </div>
  );
};

export default BurnRate;
