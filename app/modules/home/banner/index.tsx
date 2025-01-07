import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="section mt-12">
      <div className="container">
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="flex flex-col">
            <div className="text-5xl text-white font-bold ">970k+ More </div>
            <span className="text-white mt-4">Trusted companies Partner</span>
          </div>

          <div className="flex gap-7 flex-wrap  ">
            <Image
              src="/videoask.svg"
              width={200}
              height={0}
              alt="videoask"
              className="w-full md:w-[200px]"
            />
            <Image
              src="/hubspot.svg"
              width={200}
              height={0}
              alt="hubspot"
              className="w-full md:w-[200px]"
            />
            <Image
              src="/mapbox.svg"
              width={200}
              height={0}
              alt="mapbox"
              className="w-full md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
