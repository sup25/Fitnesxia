import React from "react";
import { FaHeartbeat } from "react-icons/fa";
const HearRate = () => {
  return (
    <div className="absolute lg:top-[160px] top-10  lg:right-12 right-0 z-[99999] p-2 h-fit flex items-center gap-4 bg-white rounded-lg">
      <FaHeartbeat size={25} className="text-red-500" />
      <div className="flex flex-col">
        <p className="font-semibold">70 bpm</p>
        <p className="">Heart Rate</p>
      </div>
    </div>
  );
};

export default HearRate;
