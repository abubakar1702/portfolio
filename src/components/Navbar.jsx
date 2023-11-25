import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import './style.css';

import image from "../assets/icons8-dev.gif";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleBar = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  return (
    <div className="w-full p-6 ">
      <ul className="flex flex-row justify-between">
        <div>
          <img src={image} alt="Developer" className="w-12 h-12" />
        </div>
        <div className="flex flex-row space-x-6">
          <li className="text-4xl hover:bg-black hover:text-white p-2 rounded">
            <a href=""><i class="devicon-linkedin-plain"></i></a>
          </li>
          <li className="text-4xl hover:bg-black hover:text-white p-2 rounded">
            <a href="">
            <i class="devicon-github-original"></i>
          </a>
          </li>
        </div>
        <li onClick={handleBar} className="text-4xl md:hidden">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </li>
        <div className="flex items-center flex-row text-[#242424] space-x-2 md:flex hidden font-cursive">
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            About
          </li>
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            Resume
          </li>
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            Projects
          </li>
        </div>
      </ul>
      <div
        className={`absolute bg-[#f8f8f8] md:hidden shadow-md w-full left-0 top-20 ${
          !showNav ? "hidden" : "block"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-10 m-6">
          <li className="font-bold text-xl font-cursive">Home</li>
          <li className="font-bold text-xl font-cursive">About</li>
          <li className="font-bold text-xl font-cursive">Resume</li>
          <li className="font-bold text-xl font-cursive">Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
