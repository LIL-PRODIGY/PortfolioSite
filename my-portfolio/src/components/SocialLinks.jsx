import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { BsInstagram, BsFacebook } from "react-icons/bs"


const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/actualités-en-5-langues-50b260255/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/LIL-PRODIGY",
    },
    {
      id: 3,
      child: (
        <>
          Youtube <FaYoutube size={30} />
        </>
      ),
      href: "https://www.youtube.com/channel/UCJerQinjmrNwLy2LuGGjb-w",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <BsFacebook size={30} />
        </>
      ),
      href: "",
      style: "rounded-tr-md",
    },
    {
      id: 5,
      child: (
        <>
          Tiktok <FaTiktok size={30} />
        </>
      ),
      href: "https://www.tiktok.com/@aibrainplusmine666",
      style: "rounded-tr-md",
    },
    {
      id: 6,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://Twitter.com/@5Langues",
      style: "rounded-tr-md",
    },
    {
      id: 7,
      child: (
        <>
          Instagram <BsInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/aibrainplusmine/",
      style: "rounded-tr-md",
    },
    {
      id: 8,
      child: (
        <>
          Mail <FaEnvelope size={30} />
        </>
      ),
      href: "mailto:lilprodigy706@gmail.com",
    },
  ];


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-10 px-3 my-1 ml-[-100px] hover:ml-[-10px] hover:rounded-full hover: rotate-12 duration-300 bg-gradient-to-r from-cyan-200 to-yellow-100" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-cyan-700 font-extrabold"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SocialLinks