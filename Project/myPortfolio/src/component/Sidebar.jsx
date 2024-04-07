import React from "react";
import myImage from "..//assets/myImage.jpg";
import { FaLinkedin } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="h-[800px] w-[300px] bg-white flex flex-col justify-center items-center gap-7 rounded-md">
        <div className="w-full flex items-center justify-center">
          <img
            src={myImage}
            alt=""
            className="w-[200px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold">Ashish Kumar Yadav</h2>
          <p className="text-xl text-gray-400">FullStack Developer</p>
        </div>
        <div className="w-full flex flex-wrap justify-around items-center">
          <div className="w-[60px] h-[60px] border flex items-center justify-center bg-[#F2F7FC] rounded-sm">
            <FaLinkedin className="text-3xl text-[#0077B5]" />
          </div>
          <div className="w-[60px] h-[60px] border flex items-center justify-center bg-[#F2F7FC] rounded-sm">
            <FaFacebookSquare className="text-3xl text-[#1877F2]" />
          </div>
          <div className="w-[60px] h-[60px] border flex items-center justify-center bg-[#F2F7FC] rounded-sm">
            <FaGithubSquare className="text-3xl text-[#0B0909]" />
          </div>
          <div className="w-[60px] h-[60px] border flex items-center justify-center bg-[#F2F7FC] rounded-sm">
            <FaTwitterSquare className="text-3xl text-[#1CA1F2]" />
          </div>
        </div>
        <div className="w-[95%] h-[330px] bg-[#F2F5F9] rounded-lg px-5">
          <div className="w-full flex gap-3 border-b-4 py-2 px-2 my-2">
            <div className="">
              <IoMdPhonePortrait className="text-4xl text-[#EC1B09]" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Phone</p>
              <p className="text-sm font-semibold">+91 6302001388</p>
            </div>
          </div>
          <div className="w-full flex gap-2 border-b-4 py-2 px-2 my-2">
            <div className="">
              <MdOutlineEmail className="text-4xl text-[#EC1B09]" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl font-semibold">Email</p>
              <p className="text-sm font-semibold">
                kumarashish92625@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 border-b-4 py-2 px-2 my-2">
            <div className="">
              <CiLocationOn className="text-4xl text-[#EC1B09]" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl font-semibold">Location</p>
              <p className="text-sm font-semibold">Bihar, India</p>
            </div>
          </div>

          <button className="text-sm font-semibold w-full border flex items-center justify-center gap-2 py-3 bg-[#F56B28] text-white rounded-lg">
            {" "}
            <span>
              {" "}
              <FaCloudDownloadAlt />
            </span>{" "}
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
