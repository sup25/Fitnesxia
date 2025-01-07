import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Carousel = () => {
  return (
    <div className="flex items-center relative flex-wrap">
      <button className=" border-none cursor-pointer p-2 md:-left-[10px] -left-[5px] absolute bg-[#BDBDBD] rounded-full">
        <FaArrowLeftLong className="w-5 h-5 text-white" />
      </button>

      <div className="w-full flex flex-col h-auto bg-[#464646] p-6 rounded-lg">
        <div className="flex items-center gap-3 w-full mb-4">
          <img
            src="/images/avatar.jpg"
            alt="User"
            className="w-20 h-20 rounded-full object-cover  "
          />
          <div className="flex flex-col">
            <h2 className="font-semibold text-white">Farhan Rio</h2>
            <p className="text-white">Happy Customer</p>
          </div>
        </div>
        ⭐⭐⭐⭐⭐
        <p className="text-white mt-6 md:max-w-[356px] max-w-full">
          I've been coming to this gym for 3 years now and I've never been in
          better shape. The trainers are amazing and they always push me be my
          best. I'm so glad to this gym.
        </p>
      </div>

      <button className=" border-none cursor-pointer absolute md:-right-[10px] -right-[5px] p-2 bg-red-500 rounded-full">
        <FaArrowRightLong className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Carousel;
