import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen
      text-white bg-gradient-to-b from-cyan-900 to-black"
    >
      <div className="justify-center text-center max-w-screen-lg pt-10 mx-auto flex flex-col w-full h-full">
        <div>
          <p className="border-b-4 border-yellow-100 text-4xl font-bold">
            About
          </p>
        </div>
          <p className="text-xl mt-5">
            As a native of Haiti, a multilingual web developer, content creator,
            teacher and more. I have mastered HTML, CSS, JavaScript, React,
            Tailwind, Bootstrap, SASS, and more, and I am proud to be one of the
            few Haitians working in the tech industry, particularly in web
            development. With a strong foundation in web development
            technologies such as HTML, CSS, and JavaScript, I have gone on to
            specialize in popular frameworks like React and Tailwind, as well as
            design tools like Bootstrap and SASS.
          </p>
          <br />
          <p className="text-xl">
            I have honed my skills in HTML, CSS, JavaScript, React, Tailwind,
            Bootstrap, SASS, and other essential technologies. As a Haitian
            native, I am proud to represent a rare voice in the tech industry,
            and I am committed to using my skills and experience to create
            high-quality, impactful projects that meet the needs of clients and
            users alike.
          </p>
        </div>
      </div>
  );
}
export default About