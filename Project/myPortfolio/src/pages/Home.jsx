import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full rounded-lg min-h-screen bg-white px-4 md:px-8 lg:px-12 py-6 flex flex-col gap-10">
      {/* About Section */}
      <section className="flex flex-col items-center text-center gap-6 md:gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
          About Us
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800">
          What I Do!
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
              <div className="bg-teal-600 p-4 text-center font-medium text-lg">
                Learn More
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
