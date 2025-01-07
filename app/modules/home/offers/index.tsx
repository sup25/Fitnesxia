import React from "react";
import Offer from "./component/offer";

const Offers = () => {
  return (
    <div className="section ">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex w-full justify-between flex-wrap gap-5">
            <h2 className="heading font-semibold text-white capitalize leading-normal md:max-w-[515px] max-w-full">
              The best programs we offers for you
            </h2>
            <p className="text-white text-base md:max-w-[430px] max-w-full">
              we offer a wide range of comprenshive fitness programs designed to
              carter to individuals of all fitness levels. Our aim to help your
              achive specific goals & maximize results.
            </p>
          </div>
          <Offer />
        </div>
      </div>
    </div>
  );
};

export default Offers;
