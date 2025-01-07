import React from "react";
import Toggler from "./toggler";
import Options from "./options";

const BestPlan = () => {
  return (
    <div className="section mt-16 mb-[130px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="heading font-semibold capitalize leading-normal text-white">
            Choose the best plan
          </h2>
          <p className="text-white mt-9">
            Choose a plan that's right for your growing team. Simple pricing and
            no hidden charges.
          </p>
          <Toggler />
          <Options />
        </div>
      </div>
    </div>
  );
};

export default BestPlan;
