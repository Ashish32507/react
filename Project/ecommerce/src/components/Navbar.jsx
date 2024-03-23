import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="w-screen h-16 bg-white border flex justify-around items-center sticky top-0 left-0 z-30 ">
        <div className="text-2xl font-bold">Your Shop</div>
        <div className="flex gap-4 text-xl font-semibold ">
          <NavLink
            className="text-black hover:text-black hover:bg-slate-100 px-2 py-1 hover:rounded-md h-full"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-black hover:text-black hover:bg-slate-100 px-2 py-1 hover:rounded-md h-full"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="text-black hover:text-black hover:bg-slate-100 px-2 py-1 hover:rounded-md h-full"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="text-black hover:text-black hover:bg-slate-100 px-2 py-1 hover:rounded-md h-full"
            to="/singup"
          >
            Sing Up
          </NavLink>
        </div>
        <div className="flex gap-6">
          <NavLink to="/cart">
            <FaCartPlus className="text-3xl" />
          </NavLink>

          <CgProfile className="text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
