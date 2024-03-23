import React, { useState } from "react";
// import { NavLink, useHistory } from "react-router-dom";
import Grocery from "../assets/10001.png";
import im2 from "../assets/10002.png";
import im3 from "../assets/10003.png";
import im4 from "../assets/10004.jpg";
import im5 from "../assets/10005.jpg";
import im6 from "../assets/10006.png";
import im7 from "../assets/10007.png";
import im8 from "../assets/10008.png"; // Import statement for im8
import im9 from "../assets/10009.png";
import Imageslider from "./Imageslider";
import Mainproduct from "./Mainproduct";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-screen h-full bg-slate-100 px-8 py-2">
        <div className="w-full h-32 bg-white flex items-center gap-1  justify-evenly ">
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover rounded-sm group overflow-hidden duration-300">
            <img
              src={Grocery}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Grocery</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover rounded-sm group overflow-hidden duration-300">
            <img
              src={im9}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Mobile</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im2}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Fashion</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im3}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Electronic</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im4}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Furniture</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im5}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Appliances</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im6}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Travel</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im7}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />
            <p className="font-bold">Toy</p>
          </div>
          <div className="h-[75%] w-28 bg-white flex flex-col items-center justify-center object-cover group overflow-hidden duration-300">
            <img
              src={im8}
              alt=""
              className="group-hover:scale-110 hover:duration-300 duration-300 h-16"
            />{" "}
            <p className="font-bold">Two Whiler</p>
          </div>
        </div>
        {<Imageslider />}
        {<Mainproduct />}
        <div className="flex items-center justify-center">
          <button className="w-[200px] h-9 bg-[#3e15e6] text-white font-bold text-xl rounded-sm">
            <NavLink to="/allproduct"> View More Prodcut</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
