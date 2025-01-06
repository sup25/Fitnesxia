import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import Stats from "./components/stats";
import Calories from "./components/calories";

const HeroComponent = () => {
  return (
    <div className="section  bg-gradient-to-b from-transparent via-[#37383c] to-[#3B2625] opacity-80">
      <div className="container">
        <div className="lg:flex-row flex flex-col w-full justify-between">
          <div className="relative mt-10">
            <h1 className="text-white heading leading-normal max-w-full lg:max-w-[555px]">
              get healthy body with perfect exercises.
              <span className="absolute lg:left-[330px] ">
                <div className="md:w-[200px] w-[100px] h-[40px] md:h-[80px] overflow-hidden rounded-full">
                  <Image
                    className="rounded-full"
                    src="/images/imgOne.jpg"
                    fill
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </span>
            </h1>
            <p className="text-white text-xl max-w-full md:max-w-[495px] mt-10">
              we are always there to help you to make a healthy body and minds
              through the power of fitnesss
            </p>
            <div className="mt-10 flex gap-5">
              <Button className="w-[144px] h-[50px] cursor-pointer ">
                Get Started
              </Button>
              <div className="gap-3  flex items-center justify-center ">
                <div className="w-[60px] h-[60px] cursor-pointer bg-[#4c4a57] rounded-full flex items-center justify-center ">
                  <FaPlay className="text-white" />
                </div>
                <p className="text-white">Watch Video</p>
              </div>
            </div>
            <Stats />
          </div>

          <div className="relative h-auto w-full lg:w-[500px] lg:h-auto mt-10 lg:mt-0 overflow-hidden">
            <Image
              src="/images/imgTwo.png"
              width={500}
              height={550}
              objectFit="cover"
              objectPosition="top"
              alt=""
            />
            <div className="absolute lg:left-[120px] left-[50px] top-[300px] lg:top-[330px]">
              <Calories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
