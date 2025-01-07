"use client";
import React, { useState } from "react";

const Toggler = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className="flex items-center cursor-pointer border-2 border-[#fd3221] rounded-full mt-7 mb-12  w-fit"
    >
      <span
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors text-white  duration-300 ${
          isMonthly ? "bg-[#fd3221] " : "bg-transparent "
        }`}
      >
        Monthly
      </span>

      <span
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors text-white duration-300 ${
          isMonthly ? "bg-transparent " : "bg-[#fd3221] "
        }`}
      >
        Annually
      </span>
    </div>
  );
};

export default Toggler;
