import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full shadow-md flex items-center justify-between px-4 py-3 md:px-8 md:py-4 sticky top-0 left-0 z-50 bg-white text-gray-800">
      {/* Logo */}
      <div className="text-xl font-bold">
        Ashish Kr <span className="text-[#FF9C1A]">Yadav</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                : "hover:bg-[#FF9C1A] hover:text-white"
            }`
          }
        >
          <FaHome className="text-lg" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                : "hover:bg-[#FF9C1A] hover:text-white"
            }`
          }
        >
          <IoDocumentTextOutline className="text-lg" />
          <span>Resume</span>
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                : "hover:bg-[#FF9C1A] hover:text-white"
            }`
          }
        >
          <MdWorkOutline className="text-lg" />
          <span>Project</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                : "hover:bg-[#FF9C1A] hover:text-white"
            }`
          }
        >
          <TiContacts className="text-lg" />
          <span>Contact</span>
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                    : "hover:bg-[#FF9C1A] hover:text-white"
                }`
              }
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                    : "hover:bg-[#FF9C1A] hover:text-white"
                }`
              }
            >
              <IoDocumentTextOutline className="text-lg" />
              <span>Resume</span>
            </NavLink>
            <NavLink
              to="/project"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                    : "hover:bg-[#FF9C1A] hover:text-white"
                }`
              }
            >
              <MdWorkOutline className="text-lg" />
              <span>Project</span>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-[#FF9C1A] text-white font-semibold text-xl"
                    : "hover:bg-[#FF9C1A] hover:text-white"
                }`
              }
            >
              <TiContacts className="text-lg" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
