import React from "react";
import Eductaion from "../cards/Eductaion";
import paytm from "../assets/p1.png";
import social from "../assets/p2.png";
import plan from "../assets/p3.png";
import course from "../assets/p4.png";
import test from "../assets/p5.png";
import flipkart from "../assets/p6.png";
import Projectcard from "../cards/Projectcard";

const projects = [
  {
    id: 1,
    title: "Paytm Static Page",
    img: paytm,
  },
  {
    id: 2,
    title: "Social Media Integration",
    img: social,
  },
  {
    id: 3,
    title: "Financial Planning App",
    img: plan,
  },
  {
    id: 4,
    title: "Online Course Platform",
    img: course,
  },
  {
    id: 5,
    title: "Online Test Portal",
    img: test,
  },
  {
    id: 6,
    title: "E-commerce Website",
    img: flipkart,
  },
];

function Project() {
  return (
    <div className="w-full flex flex-col  flex-wrap justify-around items-center gap-6 my-2">
      <div className="w-full px-5 text-4xl  font-bold text-start">Project</div>
      <div className="w-full flex flex-wrap justify-around items-center gap-6 my-2">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center">
            <Projectcard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
