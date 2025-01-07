import React from "react";
import { IoIosSend } from "react-icons/io";

const NewsLetter = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-white font-semibold">Subscribe Our Newsletter</h2>
      <div className="relative w-64 pt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full pl-4 pr-12 text-sm py-2 rounded-full bg-white  placeholder-black focus:outline-none"
        />
        <IoIosSend
          className="absolute bg-red-500 right-[0.25rem] top-[69%] transform -translate-y-1/2 text-white rounded-full p-2"
          size={30}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
