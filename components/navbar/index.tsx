import React from "react";

import { FaDumbbell } from "react-icons/fa6";
import Button from "../button";
import MobileMenu from "./mobile";
import { NavLinks } from "./NavLInks";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-12 ">
      <div className="flex items-center gap-4">
        <FaDumbbell size={30} className="text-red-500" />
        <p className="uppercase font-semibold text-white ">Fitnesxia</p>
      </div>
      <div className="w-full justify-end  gap-6 items-center hidden lg:flex">
        {NavLinks.map((navLinks) => (
          <div key={navLinks.title} className="text-white">
            {navLinks.title}
          </div>
        ))}
        <Button>Sign Up</Button>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
