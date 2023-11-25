import React from "react";

const Projects = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl py-6 my-10 font-press-start md:mt-32 text-[#58595b]"
        id="projects"
      >
        Projects
      </h1>
      <div className="h-auto flex items-center justify-center">
        <div
          id="bodyHobbies"
          className="grid grid-cols-1 gap-6 mx-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Child Adoption System */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <img
              src="adoption.png"
              alt="Child Adoption System"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Child Adoption System
            </h3>
            <p className="text-gray-700 mb-4">
              Developed a web-based platform for managing child adoption
              processes.
            </p>
            <p className="text-sm font-medium text-blue-500">
              Technologies used: HTML, CSS, PHP, MySQL
            </p>
            <div className="mt-4 space-x-2">
              <a
                href="https://github.com/your-username/child-adoption-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                Live Link
              </a>
            </div>
          </div>

          {/* Weather App */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <img
              src="weather.png"
              alt="Weather App"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="text-gray-700 mb-4">
              Created a weather web page that provides live weather information.
            </p>
            <p className="text-sm font-medium text-blue-500">
              Technologies used: HTML5, CSS3, JavaScript
            </p>
            <div className="mt-4 space-x-2">
              <a
                href="https://github.com/your-username/weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                Live Link
              </a>
            </div>
          </div>

          {/* E-commerce Platform */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <img
              src="https://via.placeholder.com/400"
              alt="E-commerce Platform"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="text-gray-700 mb-4">
              Built a scalable e-commerce platform for selling products online.
            </p>
            <p className="text-sm font-medium text-blue-500">
              Technologies used: HTML, CSS, JavaScript
            </p>
            <div className="mt-4 space-x-2">
              <a
                href="https://github.com/your-username/ecommerce-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                Live Link
              </a>
            </div>
          </div>

          {/* Frag Guessing Game */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <img
              src="frag_game.png"
              alt="Frag Guessing Game"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Frag Guessing Game</h3>
            <p className="text-gray-700 mb-4">
              Developed a guessing game for fragrances, testing users' scent
              recognition.
            </p>
            <p className="text-sm font-medium text-blue-500">
              Technologies used: React, CSS, Firebase
            </p>
            <div className="mt-4 space-x-2">
              <a
                href="https://github.com/your-username/frag-guessing-game"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
