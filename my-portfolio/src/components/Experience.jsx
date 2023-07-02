import React from "react"

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import bootstrap from "../assets/bootstrap.png"
import sass from "../assets/sass.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"
import git from "../assets/git.png"



const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
  ];

  return (

    <div name="experience" className="bg-gradient-to-b from-cyan-900 to-black w-full h-screen md:h-screen pt-96">

      <div className="max-w-screen-lg mx-auto pt-10 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-center justify-center items-center text-4xl font-bold border-b-4 border-yellow-100 p-2 flex">Experiences</p>
          <p className="py-3 text-center"> Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">

          {
            techs.map(({id, src, title, style}) => (
              
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style}`}>
            <img src={src} alt="/" className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
            </div>
        ))}
          
        </div>
      </div>
    </div>
  )
}

export default Experience