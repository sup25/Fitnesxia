import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import Contacts from "./contacts";
import Menu from "./menu";
import NewsLetter from "./newsLetter";
import Socials from "./socials";

const Footer = () => {
  return (
    <div className="section my-16 ">
      <div className="container">
        <div className="w-full flex flex-wrap">
          <div className="flex flex-col w-full">
            <div className="flex justify-between flex-wrap gap-5 border-[#5f5f61] border-b-2 pb-10">
              <Menu />
              <Contacts />
              <NewsLetter />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap  gap-10 pt-8">
            <div className="flex items-center gap-4">
              <FaDumbbell size={30} className="text-red-500" />
              <p className="uppercase font-semibold text-white ">Fitnesxia</p>
            </div>
            <p className="text-gray-400">
              © 2023 Fitnesxia. All Copyrights reserved{" "}
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
