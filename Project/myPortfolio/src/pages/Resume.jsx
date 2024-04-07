import React from "react";
import Eductaion from "../cards/Eductaion";
import Skill from "../cards/Skill";
import { MdCastForEducation } from "react-icons/md";
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
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "JAVA",
  "REACT",
  "Tailwind CSS",
  "GIT",
];

const softSkill = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "JAVA",
  "REACT",
  "Tailwind CSS",
  "GIT",
];

function Resume() {
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col gap-9">
      {/* About Section */}
      <div className="flex flex-col w-full gap-2">
        <div className="text-3xl font-bold flex items-center gap-2">
          {" "}
          <MdCastForEducation className="text-[#F0350D] text-4xl " />{" "}
          <span>Education</span>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-10 my-4">
          {services.map((service) => (
            <Eductaion key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div>
          <div className="text-3xl font-bold text-center">Work Skill</div>
          <div className="w-full flex flex-wrap justify-center items-center gap-5 my-4">
            {workSkill.map((service) => (
              <Skill key={service.id} service={service} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-center">Soft Skill</div>
          <div className="w-full flex flex-wrap justify-center items-center gap-5 my-4">
            {softSkill.map((service) => (
              <Skill key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
