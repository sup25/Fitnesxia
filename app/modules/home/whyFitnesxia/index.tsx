import React from "react";
import { List } from "./List";
import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "@/components/button";
import Image from "next/image";
import HearRate from "./heartRate";
import BurnRate from "./burnRate";

const WhyFitnesxia = () => {
  return (
    <div className="section mt-[72px] py-20  bg-[#3a3b3f]">
      <div className="container">
        <div className=" flex w-full justify-between flex-wrap gap-5">
          <div className="flex flex-col z-10">
            <h2 className="text-white text-4xl font-semibold heading leading-normal capitalize max-w-full md:max-w-[470px]">
              Why should people choose fitnesxia services
            </h2>
            {List.map((item, index) => (
              <div key={index} className="mt-11 flex-col">
                <div className="flex items-center gap-4">
                  <IoCheckmarkCircle size={25} className="text-orange-400" />
                  <h2 className="max-w-[500px] text-white font-semibold text-2xl">
                    {item.title}
                  </h2>
                </div>
                <p className="max-w-[400px] text-white font-medium mt-6">
                  {item.description}
                </p>
              </div>
            ))}
            <Button className="w-[140px] p-3 mt-9">Join Today</Button>
          </div>
          <div className="relative lg:w-1/2 z-0 flex justify-center overflow-hidden">
            <div className="absolute z-0 bg-orange-400 rounded-full lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] bottom-0 "></div>
            <HearRate />
            <BurnRate />
            <Image
              src="/images/fitnessgirl.png"
              width={800}
              height={500}
              alt=""
              className="object-cover relative z-10 max-w-[500px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFitnesxia;
