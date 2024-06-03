import React from "react";
import Logo from "../assets/Logo.png";
function Hearder() {
  return (
    <div className="flex w-full justify-between items-center border-black border px-[20px]">
      <div className="py-2">
        <img src={Logo} alt="" className="w-[100px]" />
      </div>
      <div>
        <ul className="flex list-none">
          <li className="p-[10px] text-[20px] font-semibold">Home</li>
          <li className="p-[10px] text-[20px] font-semibold">About Us</li>
          <li className="p-[10px] text-[20px] font-semibold">Contact Us</li>
          <li className="p-[10px] text-[20px] font-semibold">Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Hearder;
