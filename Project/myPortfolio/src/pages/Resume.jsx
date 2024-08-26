import React from "react";
import Eductaion from "../cards/Eductaion";
import Skill from "../cards/Skill";
import { MdCastForEducation } from "react-icons/md";
import WorkSkill from "../cards/WorkSkill";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { RiSpeakFill, RiTeamFill } from "react-icons/ri";
import {
  AiOutlineSolution,
  AiOutlineFieldTime,
  AiOutlineBulb,
} from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const services = [
  {
    id: 1,
    date: 2019,
    title: "Class 10th",
    school: "Co-Oprative High School Koiladewa Gopalganj Bihar",
  },
  {
    id: 2,
    date: "2019-2021",
    title: "Class 12th",
    school: "Co-Oprative Inter Colleges koiladewa Gopalganj Bihar",
  },
  {
    id: 3,
    date: "2021-2025 Present",
    title: "B.Tech CSE",
    school: "Amritsar Group Of Colleges Amritsar Punjab",
  },
];

const workSkill = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JAVASCRIPT", icon: <FaJsSquare /> },
  { name: "JAVA", icon: <FaJava /> },
  { name: "REACT JS", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "GITHUB", icon: <SiGithub /> },
  { name: "NODE JS", icon: <FaNodeJs /> },
  { name: "EXPRESS JS", icon: <SiExpress /> },
  { name: "MONGODB", icon: <SiMongodb /> },
];

const softSkill = [
  { name: "COMMUNICATION", icon: <RiSpeakFill /> },
  { name: "TEAMWORK", icon: <RiTeamFill /> },
  { name: "PROBLEM-SOLVING", icon: <AiOutlineSolution /> },
  { name: "ADAPTABILITY", icon: <AiOutlineFieldTime /> },
  { name: "LEADERSHIP", icon: <MdGroups /> },
  { name: "TIME MANAGEMENT", icon: <AiOutlineFieldTime /> },
  { name: "CREATIVITY", icon: <AiOutlineBulb /> },
];

function Resume() {
  return (
    <div className="w-full min-h-screen rounded-lg bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-6 flex flex-col gap-10">
      {/* Education Section */}
      <section className="flex flex-col gap-6">
        <div className="text-3xl font-bold flex items-center gap-2 text-gray-800">
          <MdCastForEducation className="text-[#F0350D] text-4xl" />
          <span>Education</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Eductaion key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col lg:flex-row lg:gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Work Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {workSkill.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-2 px-4 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
              >
                <WorkSkill service={skill} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {softSkill.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-2 px-4 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
              >
                <Skill service={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
