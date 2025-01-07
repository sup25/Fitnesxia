import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import Badge from "./component/badge";

const FreeTrial = () => {
  return (
    <div className="section my-28">
      <div className="container">
        <div className="flex w-full justify-between items-center flex-wrap gap-10">
          <div className="relative">
            <Image
              className="h-[395px] object-cover rounded-lg"
              src="/images/battlerope.jpg"
              width={395}
              height={0}
              alt="Battle Rope"
            />
            <div className="absolute bottom-[50px] md:right-[-60px] right-[20px]">
              <Badge />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="heading font-semibold text-4xl capitalize max-w-[426px] text-white leading-normal">
              Get ready to reach your fitness goal
            </h2>
            <p className="text-white max-w-[372px] mt-9">
              {" "}
              we are a gym that is committed to helping people reach their
              fitness goals. We offer a variety of theirs programs and services
              to fit your needs, whether you are a experienced athelete.
            </p>
            <p className="text-white max-w-[340px] mt-5">
              {" "}
              we believe that everyone should have access to benefits of
              exercise make it happen
            </p>
            <Button className="mt-8 w-[168px]  py-3">Free trial today</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
