import React from "react";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="bg-[#F2F5F9] px-10">
        <div className="w-full h-24 flex justify-end items-center">
          <div className="w-[530px] h-24 bg-white flex items-center justify-around flex-wrap rounded-sm shadow-sm px-2">
            <NavLink
              to="/home"
              className="flex flex-col items-center justify-center bg-[#CED4DA] p-3 rounded-sm"
            >
              <FaHome className="text-2xl text-[#7D7C78]" />
              <p className="text-sm">Home</p>
            </NavLink>
            <NavLink
              to="/resume"
              className="flex flex-col items-center justify-center bg-[#CED4DA] p-3 rounded-sm"
            >
              <IoDocumentTextOutline className="text-2xl text-[#7D7C78]" />
              <p className="text-sm">Resume</p>
            </NavLink>
            <NavLink
              to="/project"
              className="flex flex-col items-center justify-center bg-[#CED4DA] p-3 rounded-sm"
            >
              <MdWorkOutline className="text-2xl text-[#7D7C78]" />
              <p className="text-sm">Project</p>
            </NavLink>
            <NavLink
              to="/certificate"
              className="flex flex-col items-center justify-center bg-[#CED4DA] p-3 rounded-sm"
            >
              <TbFileCertificate className="text-2xl text-[#7D7C78]" />
              <p className="text-sm">Certificate</p>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex flex-col items-center justify-center bg-[#CED4DA] p-3 rounded-sm"
            >
              <TiContacts className="text-2xl text-[#7D7C78]" />
              <p className="text-sm">Contact</p>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between items-center my-3"></div>
      </div>
    </>
  );
}

export default Menu;
