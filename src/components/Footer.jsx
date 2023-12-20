import React from "react";
import logo from "../assets/logo.png";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <MdEmail />,
    link: "/",
  },
  {
    icon: <FaInstagram />,
    link: "/",
  },
  {
    icon: <FaTwitter />,
    link: "/",
  },
  {
    icon: <FaYoutube />,
    link: "/",
  },
];

const companyLinks = [
  {
    name: "About us",
    link: "/",
  },
  {
    name: "blog",
    link: "/",
  },
  {
    name: "Contact us",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Testimonials",
    link: "/",
  },
];

const supportLinks = [
  {
    name: "Help center",
    link: "/",
  },
  {
    name: "Status",
    link: "/",
  },
  {
    name: "Legal",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/",
  },
  {
    name: "Terms of service",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className=" text-white mt-8 bg-[#263238]">
      <div className="container py-12 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col space-y-2 whitespace-nowrap  ">
          <div className="flex items-center gap-1">
            <div className="h-12 w-12 ">
              <img src={logo} alt="" />
            </div>
            <h2 className="font-bold text-3xl">Infusible Coders</h2>
          </div>
          <p>Copyright 2020 infusible coder ltd</p>
          <p>All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <>
                <div className="bg-[#3c464c] rounded-full p-2 hover:bg-primary">
                  <a href={link.link}>{link.icon}</a>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 ">
          <div className="flex flex-col gap-2 text-start">
            <h2 className="font-semibold text-2xl mb-4">Company</h2>
            <ul className="flex flex-col justify-start items-start  space-y-2">
              {companyLinks.map((link) => (
                <li className="hover:text-primary whitespace-nowrap">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-start">
            <h2 className="font-semibold text-2xl mb-4">Support</h2>
            <ul className="flex flex-col justify-start items-start text-start space-y-2">
              {supportLinks.map((link) => (
                <li className="hover:text-primary whitespace-nowrap">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-start max-h-8 max-md:flex-row max-sm:hidden ">
            <h2 className="font-semibold text-2xl">Stay up to date</h2>
            <span className="flex justify-center items-center bg-[#515b60] rounded-lg relative ">
              <input
                className="bg-[#515b60] border-none rounded-lg py-2 px-4"
                type="text"
                placeholder="Your email address"
              />
              <button className="bg-transparent absolute right-1">
                <FaTelegramPlane />
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
