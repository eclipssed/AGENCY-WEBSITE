import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

// react icons
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Service",
    path: "#service",
  },
  {
    name: "Feature",
    path: "#feature",
  },
  {
    name: "Product",
    path: "#product",
  },
  {
    name: "Testimonial",
    path: "#testimonial",
  },
  {
    name: "FAQs",
    path: "#faqs",
  },
];

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`container py-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0  border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex  justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              className="w-10 inline-block items-center"
              alt="logo.png"
            />
            <span className="text-neutralDGrey">Infusible Coder</span>
          </a>
          {/* nav items for large devices */}
          <ul className="md:flex space-x-8 hidden">
            {navLinks.map(({ name, path }) => (
              <a
                href={path}
                key={name}
                className="block text-base text-greyText hover:text-primary first:font-medium"
              >
                {name}
              </a>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="space-x-4 hidden  lg:flex items-center">
            <button className="bg-transparent text-primary hover:bg-transparent hover:text-neutralDGrey">
              Login
            </button>
            <button>Sign up</button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden ">
            <div
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 " />
              ) : (
                <FaBars className="w-6 h-6 " />
              )}
            </div>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 bg-primary mt-16 py-7 text-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navLinks.map(({ name, path }) => (
            <a
              href={path}
              key={name}
              onClick={() => setisMenuOpen(false)}
              className="block text-base hover:text-neutralDGrey first:font-medium"
            >
              {name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
