import React from "react";

import geobro from "../assets/geobro.jpeg"
import map from "../assets/map.jpeg"
import todo from "../assets/todo.jpeg"

const Project = ({ title, description, technologies, githubLink, liveDemoLink, imageSrc }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm font-medium text-blue-500">Technologies used: {technologies}</p>
      <div className="mt-4 space-x-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500"
        >
          GitHub
        </a>
        <a href={liveDemoLink} className="text-gray-500 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
          Live Link
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Flag Guessing Game (GeoBro)",
      description: "Developed an engaging flag guessing game where users identify countries based on displayed flags. Implemented a point system and time constraint for added challenge.",
      technologies: "Next.js, Tailwind CSS",
      githubLink: "https://github.com/abubakar1702/geobro",
      liveDemoLink: "https://geobro-rust.vercel.app/o",
      imageSrc: geobro, // Replace with your actual image source
    },
    {
      title: "Country Guessing Game (GeoBro - Map)",
      description: "Designed an interactive game where users locate a random country on a map, enhancing geographical awareness.",
      technologies: "React.js, Tailwind CSS, Leaflet API",
      githubLink: "https://github.com/abubakar1702/geobro-map",
      liveDemoLink: "https://geobro-map.vercel.app/",
      imageSrc: map, // Replace with your actual image source
    },
    {
      title: "Task Management App",
      description: "Developed an employee task management application facilitating task addition, updates, and deletions, with all data stored in local storage.",
      technologies: "React.js, Tailwind CSS",
      githubLink: "https://github.com/abubakar1702/task-management",
      liveDemoLink: "https://task-management-two-ochre.vercel.app/",
      imageSrc: todo, // Replace with your actual image source
    },
  ];

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
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
