import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="w-full flex items-center justify-between flex-wrap bg-gradient-to-r from-black to-cyan-900 p-4 cursor-pointer">
        <div className="flex items-center flex-shrink-0 text-yellow-100 cursor-pointer">
          <div className="w-16">
            <img src={logo} alt="myflag" />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 border rounded text-yellow-100 bg-black hover:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="items-center justify-between text-end text-md lg:flex-grow ">
            <Link
              to="home"
              smooth={500}
              duration={800}
              className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-yellow-100 text-lg hover:text-white mr-4"
            >
              Home
            </Link>

            <Link
              to="projects"
              smooth={500}
              duration={800}
              className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4 text-lg"
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={500}
              duration={800}
              className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-yellow-100 text-lg hover:text-white mr-4"
            >
              Experience
            </Link>
            <Link
              to="about"
              smooth={500}
              duration={800}
              className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-yellow-100 text-lg hover:text-white mr-4"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
