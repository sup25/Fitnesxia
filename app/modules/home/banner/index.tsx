import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="section mt-10">
      <div className="container">
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="flex flex-col">
            <div className="text-5xl text-white font-bold ">970k+ More </div>
            <span className="text-white mt-4">Trusted companies Partner</span>
          </div>

          <div className="flex gap-7 flex-wrap ">
            <Image src="/videoask.svg" width={200} height={0} alt="" />
            <Image src="/hubspot.svg" width={200} height={0} alt="" />
            <Image src="/mapbox.svg" width={200} height={0} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
