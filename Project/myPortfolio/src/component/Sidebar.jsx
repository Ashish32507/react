import React from "react";
import myImage from "../assets/myImage.jpg";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Sidebar() {
  return (
    <aside className="w-full max-w-full md:max-w-full lg:max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center gap-6 md:gap-8">
      {/* Profile Picture */}
      <div className="w-full flex justify-center">
        <img
          src={myImage}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#FF9C1A]"
        />
      </div>
      {/* Name and Role */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Ashish Kumar Yadav
        </h2>
        <p className="text-sm text-gray-600 md:text-base lg:text-lg">
          MERN Stack Developer
        </p>
      </div>
      {/* Social Links */}
      <div className="w-full flex justify-around md:justify-around">
        <a
          href="https://www.linkedin.com/in/ashish-kumar-yadav-706959236/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0077B5] rounded-full text-white hover:bg-[#005582]"
        >
          <FaLinkedin className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/yadav_ashish_2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#1877F2] rounded-full text-white hover:bg-[#0056b3]"
        >
          <FaInstagramSquare className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://github.com/Ashish32507"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0B0909] rounded-full text-white hover:bg-[#0a0a0a]"
        >
          <FaGithubSquare className="text-xl md:text-2xl" />
        </a>
        {/* <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#1CA1F2] rounded-full text-white hover:bg-[#0d7bf4]"
        >
          <FaTwitterSquare className="text-xl md:text-2xl" />
        </a> */}
      </div>
      {/* Contact Information */}
      <div className="w-full bg-[#F2F5F9] rounded-lg p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4 border-b pb-2">
          <IoMdPhonePortrait className="text-2xl md:text-3xl text-[#EC1B09]" />
          <div>
            <p className="text-base md:text-lg font-semibold">Phone</p>
            <p className="text-sm">+91 91XXXXXXXX</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b pb-2">
          <MdOutlineEmail className="text-2xl md:text-3xl text-[#EC1B09]" />
          <div>
            <p className="text-base md:text-lg font-semibold">Email</p>
            <p className="text-sm">ashishkryadavcse@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b pb-2">
          <CiLocationOn className="text-2xl md:text-3xl text-[#EC1B09]" />
          <div>
            <p className="text-base md:text-lg font-semibold">Location</p>
            <p className="text-sm">Bihar, India</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1COJxVJXKzZvkwXTTOrmfmgKY3PK1iZSO"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 flex items-center justify-center bg-[#F56B28] text-white rounded-lg hover:bg-[#d94f1f] transition-colors duration-300"
        >
          <FaCloudDownloadAlt className="text-lg mr-2" />
          Download CV
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
