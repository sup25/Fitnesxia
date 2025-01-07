import React from "react";
import { UserRating } from "./userRating";
import Carousel from "./carousal";

const Testimonial = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="flex w-full justify-between flex-wrap gap-5">
          <div className="flex flex-col">
            <h2 className="heading text-white capitalize leading-normal font-semibold md:max-w-[670px] max-w-full ">
              What our happy clients say about us
            </h2>
            <p className="text-white mt-6 md:max-w-[400px] max-w-full">
              I have been a member of Fitness within about 6 months now and I
              absolutely love it! The trainers are so motivate and they really
              help to reach fitness goals.
            </p>
            <UserRating />
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
