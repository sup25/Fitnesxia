"use client";
import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import Button from "../button";
import MobileMenu from "./mobile";
import { NavLinks } from "./NavLInks";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="section">
      <div className="container">
        <div className="w-full flex items-center justify-between md:py-12 py-6 ">
          <div className="flex items-center gap-4">
            <FaDumbbell size={30} className="text-red-500" />
            <p className="uppercase font-semibold text-white ">Fitnesxia</p>
          </div>
          <div className="w-full justify-end  gap-6 items-center hidden lg:flex">
            {NavLinks.map((navLink) => (
              <div
                key={navLink.title}
                className={`${
                  pathname === navLink.path ? "text-red-500" : "text-white"
                }`}
              >
                {navLink.title}
              </div>
            ))}
            <Button>Sign Up</Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
