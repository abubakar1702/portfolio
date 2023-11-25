import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faTerminal,
  faLaptopCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Skills & Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            A glimpse of what I bring to the table.
          </p>
        </div>
        <div className="mb-4 flex flex-row items-center md:flex-row justify-center">
          <a
            href="#_"
            className={`relative inline-block w-32 px-4 py-2 font-medium group ${
              activeTab === "experience" ? "text-white" : "text-black"
            }`}
            onClick={() => handleTabClick("experience")}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative group-hover:text-white">Skills</span>
          </a>
          <a
            href="#_"
            className={`relative inline-block w-32 px-4 py-2 font-medium group ${
              activeTab === "skills" ? "text-white" : "text-black"
            }`}
            onClick={() => handleTabClick("skills")}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative group-hover:text-white">Experience</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-8">
          {/* Experience Card */}
          {activeTab === "experience" && (
            <div className="bg-white p-6 rounded-lg shadow-md w-5/6 md:w-2/3 h-auto mb-4">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex flex-col items-center space-y-4 p-4 overflow-x-auto">
                <table className="w-full table-auto">
                  <tbody>
                    {/* First Row */}
                    <tr className="text-[#3f3f3f]">
                      <td className="p-2">
                        <i className="devicon-react-original colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-mysql-plain colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-javascript-plain text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-git-plain text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-php-plain colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-postgresql-plain colored text-6xl"></i>
                      </td>
                    </tr>
                    {/* Second Row */}
                    <tr className="text-[#3f3f3f]">
                      <td className="p-2">
                        <i className="devicon-nextjs-original text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-numpy-original colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-python-plain text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-github-original colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-nodejs-plain colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-vscode-plain colored text-6xl"></i>
                      </td>
                    </tr>
                    {/* Third Row */}
                    <tr className="text-[#3f3f3f]">
                      <td className="p-2">
                        <i className="devicon-npm-original-wordmark colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-java-plain colored text-6xl"></i>
                      </td>
                      <td className="p-2">
                        <i className="devicon-cplusplus-plain colored text-6xl"></i>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Skills Card */}
          {activeTab === "skills" && (
            <div className="bg-white p-6 rounded-lg w-full md:w-2/3 h-auto md:h-96 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="w-full bg-white p-6 rounded-lg shadow-md m-4 text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Software Engineer (Intern)
                </h3>
                <h1 className="text-xl text-indigo-600 mb-2">
                  Codemen Solution Limited
                </h1>
                <p className="text-gray-600">
                  August 1st, 2013 - November 30, 2023
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
