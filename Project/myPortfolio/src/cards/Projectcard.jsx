import React from "react";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({ project }) {
  return (
    <div className="max-w-sm w-full py-4 shadow-lg rounded-lg border border-gray-200 overflow-hidden group mx-auto">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-52 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        {/* Buttons Section */}
        <div className="flex justify-between items-center space-x-4">
          <a
            href={project.gtihub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            {/* <i class="fa-brands fa-github"></i>
            <img src="github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" /> */}
            <FaGithub className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              />
            </svg>
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
