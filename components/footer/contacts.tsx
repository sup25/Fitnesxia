import React from "react";
import { Contact } from "./menuList";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contacts = () => {
  return (
    <>
      {Contact.map((Contact, index) => (
        <div key={index} className="flex flex-col">
          <h2 className="text-white font-semibold ">{Contact.title}</h2>
          <div className="pt-6 flex flex-col gap-5">
            <p className="text-white flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              {Contact.phone}
            </p>
            <p className="text-white flex items-center gap-2 ">
              <IoIosMail size={20} className="text-red-500" />
              {Contact.email}
            </p>
            <p className="text-white flex items-center gap-2 max-w-52">
              <FaLocationDot className="text-red-500" />
              {Contact.address}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contacts;
