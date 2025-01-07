import React from "react";
import { MenuList } from "./menuList";

const Menu = () => {
  return (
    <>
      {MenuList.map((menu, index) => (
        <div key={index} className="flex flex-col">
          <h2 className="text-white font-semibold ">{menu.title}</h2>
          <div className="pt-6 flex flex-col gap-5">
            <p className="text-white">{menu.linkOne}</p>
            <p className="text-white">{menu.linkTwo}</p>
            <p className="text-white">{menu.linkThree}</p>
            <p className="text-white">{menu.linkFour}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
