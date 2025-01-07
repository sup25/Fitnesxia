import Image from "next/image";
import React from "react";

const Badge = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex gap-2">
      <Image src="/weightlift.svg" width={50} height={50} alt="Weblift" />
      <p className="font-semibold max-w-[100px] ">Professional Trainer</p>
    </div>
  );
};

export default Badge;
