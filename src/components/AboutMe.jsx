import React, { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Skills & Experiences
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            A glimpse of what I bring to the table.
          </p>
        </div>
        <div className="flex items-center p-4 justify-center space-x-4">
          <button
            onClick={() => handleTabChange("skills")}
            className={`tab-button ${
              activeTab === "skills" ? "active text-sky-600" : ""
            }`}
          >
            Skills
          </button>
          <div className="border-r border-gray-400 h-6"></div>
          <button
            onClick={() => handleTabChange("experiences")}
            className={`tab-button ${
              activeTab === "experiences" ? "active text-sky-600" : ""
            }`}
          >
            Experience
          </button>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-8">
          <div
            className={`bg-white p-6 rounded-lg shadow-md w-5/6 md:w-2/3 h-auto mb-4 ${
              activeTab === "experiences" ? "hidden" : ""
            }`}
          >
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-col items-center space-y-4 p-4 overflow-x-auto">
              <table className="w-full table-auto">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`bg-sky-400 p-6 rounded-lg shadow-md w-5/6 md:w-2/3 h-auto mb-4 ${
              activeTab === "skills" ? "hidden" : ""
            }`}
          >
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="flex flex-col bg-white rounded space-y-4 p-4 w-full shadow-md">
              <h3 className="text-left">Software Engineer (intern)</h3>
              <h1 className="text-left text-xl text-red-600 font-bold">
                Codemen Solution Ltd.
              </h1>
              <p
                className="text-left text-xs text-gray-600
              "
              >
                August 1st 2023 - November 30, 2023
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
