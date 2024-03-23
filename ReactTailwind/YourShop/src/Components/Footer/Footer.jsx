import React, { Component } from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="w-full h-28 bg-black text-white flex justify-between items-center border px-10">
        <div className="">
          <Link className="text-3xl font-bold">Your Shop</Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link to={"/home"} className="text-xl  font-bold">
            Home
          </Link>
          <Link to={"/cart"} className="text-xl font-bold">
            Cart
          </Link>
          <Link className="text-xl  font-bold">About</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
