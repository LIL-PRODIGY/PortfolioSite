import React from "react";
import atiswendy from "../assets/atiswendy.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-68 w-full bg-gradient-to-b from-black via-black to-cyan-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full md:flex-row">
        <div class="flex flex-col justify-center h-full p-32">
          <div className="text-yellow-100 text-5xl font-bold hover:text-white cursor-pointer">
            <h1>Web Developer</h1>
          </div>
          <p className="text-gray-400 py-4 max-w-md">
            Hi! I'm <span className="text-white text-xl">
              John Mico Jeffpherson Alexis
            </span>
            
            , as a Haitian native, I bring a diverse perspective and cultural
            understanding to every project I work on. My technical skills
            include mastery of HTML, CSS, JavaScript, React, Tailwind,
            Bootstrap, SASS, and more.
          </p>

          <div>
            <a
              href={resume}
              download
              className="hover:scale-110 duration-300 text-white font-bold leading-3 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-yellow-100 cursor-pointer"
            >
              Resume
              <span className="text-black font-bold ml-1">
                <BsBoxArrowUpRight size={20} className="ml-2" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={atiswendy}
            alt="wendypic"
            className="xl:pt-32 items-center justify-center w-full border border-transparent rounded-full hover:scale-105 duration-500 cursor-pointer max-w-xs md:max-w-none "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
