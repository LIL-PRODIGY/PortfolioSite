import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCJerQinjmrNwLy2LuGGjb-w",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/@5langues",
    },
    {
      name: "Github",
      link: "https://www.github.com/LIL-PRODIGY",
    },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@aibrainplusmine666",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/actualités-en-5-langues-50b260255/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/aibrainplusmine/",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-black to-cyan-900 pt-96 text-gray-500">
      <div className="container mx-auto flex flex-wrap text-center items-center justify-center">
        <div className="w-full lg:w-1/3 px-4">
          <h3 className="font-bold text-2xl mb-4">About Me</h3>
          <p className="mb-4 mx-12">
            Hi there! I'm Haitian native, a multilingual who speaks French,
            Spanish, Portuguese, English fluently, as a Web Developer I love
            creating beautiful and functional websites and web applications,
            Thanks for visiting my portfolio!
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h3 className="font-bold text-2xl mb-4">Contact Me</h3>
          <ul className="list-reset">
            <li className="mb-2 hover:text-white">
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:example@mail.com">lilprodigy706@gmail.com</a>
            </li>
            <li className="mb-2 hover:text-white">
              <i className="fas fa-phone mr-2"></i>
              <a href="tel:+8157136063">815-713-6063</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h3 className="font-bold text-2xl mb-4 mx-12">Follow Me</h3>
          <ul className="list-reset">
            {socialLinks.map((link) => {
              const Icon = link.name;
              return (
                <li className="mb-2 hover:text-white" key={link.name}>
                  <a href={link.link} id={`${link.name.toLowerCase()}-link`}>
                    <Icon className="mr-2" />
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="block container mx-auto border-t border-black text-center">
        <p className="justify-end">
          Copyright&copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
