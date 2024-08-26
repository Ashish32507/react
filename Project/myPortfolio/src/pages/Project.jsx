import React from "react";
import Projectcard from "../cards/Projectcard";
import paytm from "../assets/p1.png";
import social from "../assets/p2.png";
import plan from "../assets/p3.png";
import course from "../assets/p4.png";
import test from "../assets/p5.png";
import flipkart from "../assets/p6.png";

const projects = [
  {
    id: 1,
    title: "Paytm Static Page",
    img: paytm,
    gtihub: "https://github.com/Ashish32507/Paytm_Clone",
  },
  {
    id: 2,
    title: "Social Media Integration",
    img: social,
    gtihub:
      "https://github.com/Ashish32507/react/tree/main/ReactTailwind/SocialMedia",
  },
  {
    id: 3,
    title: "Online Course Platform",
    img: course,
    gtihub:
      "https://github.com/Ashish32507/react/tree/main/ReactTailwind/12topCourse",
  },
  {
    id: 4,
    title: "E-commerce Website",
    img: flipkart,
    gtihub:
      "https://github.com/Ashish32507/react/tree/main/Project/shoppinCart",
  },
];

function Project() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10 rounded-lg">
      {/* Title Section */}
      <div className="w-full px-5 text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 tracking-wide">
          Projects
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          A showcase of some of my recent works and personal projects
        </p>
      </div>
      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-5">
        {projects.map((project) => (
          <div key={project.id}>
            <Projectcard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
