import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './style.css';

import image from "../assets/icons8-dev.gif";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleBar = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  return (
    <div className="w-full p-6">
      <ul className="flex flex-row justify-between">
        <div>
          <img src={image} alt="Developer" className="w-12 h-12" />
        </div>
        <div className="flex flex-row space-x-6">
          <li className="text-4xl hover:bg-black hover:text-white p-2 rounded">
            <a target="_blank" href="https://www.linkedin.com/in/abubakar17/"><i className="devicon-linkedin-plain"></i></a>
          </li>
          <li className="text-4xl hover:bg-black hover:text-white p-2 rounded">
            <a target="_blank" href="https://github.com/abubakar1702"><i className="devicon-github-original"></i></a>
          </li>
        </div>
        <li onClick={handleBar} className="text-4xl md:hidden">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </li>
        <div className="flex items-center flex-row text-[#242424] space-x-2 md:flex hidden font-cursive">
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            <Link to="/resume">Projects</Link>
          </li>
          <li className="px-4 py-2 hover:text-white hover:shadow-xl cursor-pointer rounded-md text-xl hover:bg-sky-600">
            <Link to="/projects">Contact</Link>
          </li>
        </div>
      </ul>
      <div
        className={`absolute bg-[#f8f8f8] md:hidden shadow-md w-full left-0 top-20 ${
          !showNav ? "hidden" : "block"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-10 m-6">
          <li className="font-bold text-xl font-cursive">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-xl font-cursive">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold text-xl font-cursive">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="font-bold text-xl font-cursive">
            <Link to="/projects">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
