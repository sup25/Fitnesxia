import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { href: "https://www.facebook.com", icon: <FaFacebookF size={20} /> },
  { href: "https://www.instagram.com", icon: <FaInstagram size={20} /> },
  { href: "https://www.twitter.com", icon: <FaTwitter size={20} /> },
  { href: "https://www.linkedin.com", icon: <FaLinkedinIn size={20} /> },
];

const Socials = () => {
  return (
    <div className="flex gap-2">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-white rounded-full p-1 flex items-center justify-center"
        >
          <div className="text-black">{social.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
