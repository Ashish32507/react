import React from "react";
import Cards from "../cards/Cards";
import Skill from "../cards/Skill";
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together.",
  },
  {
    id: 3,
    title: "UI/UX Designing",
    description:
      "Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.",
  },
  {
    id: 4,
    title: "Mentorship",
    description:
      "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.",
  },
];

function Home() {
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col gap-9">
      {/* About Section */}
      <div className="flex flex-col w-full gap-2">
        <div className="text-5xl font-semibold">About Us</div>
        <p className="text-xl text-justify">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>
      {/* Services Section */}
      <div>
        <div className="text-3xl font-bold">What I do!</div>
        <div className="w-full flex flex-wrap justify-center items-center gap-10 my-4">
          {services.map((service) => (
            <Cards key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
