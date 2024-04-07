import React from "react";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-[#F2F5F9] flex items-center justify-around">
        <div className="text-3xl font-semibold">
          Ashish <span className="text-[#FF9C1A]">Kumar</span>{" "}
        </div>
        <div className="rounded-full border-2 p-2">
          <FaRegMoon className="text-xl font-semibold" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
