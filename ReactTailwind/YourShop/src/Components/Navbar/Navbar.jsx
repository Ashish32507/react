import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full h-16 bg-white text-black flex justify-between items-center border px-10 border-b-2 sticky top-0 left-0 shadow-sm z-40">
        <div className="">
          <Link className="text-3xl font-bold ">Your Shop</Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link
            to={"/home"}
            className="text-xl  font-bold hover:bg-slate-500 hover:duration-500 p-2 duration-500"
          >
            Home
          </Link>
          <Link
            to={"/cart"}
            className="text-xl font-bold hover:bg-slate-500 hover:duration-500 p-2 duration-500"
          >
            Cart
          </Link>
          <Link
            to={"/cart"}
            className="text-xl font-bold hover:bg-slate-500 hover:duration-500 p-2 duration-500"
          >
            Login
          </Link>
          <Link
            to={"/cart"}
            className="text-xl font-bold hover:bg-slate-500 hover:duration-500 p-2 duration-500"
          >
            Sing Up
          </Link>
          <Link className="text-xl  font-bold hover:bg-slate-500 hover:duration-500 p-2 duration-500">
            About
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
