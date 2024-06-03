import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Navbar() {
  const value = useContext(AppContext);
  return (
    <>
      {console.log(value.product)}
      <div className="w-full h-[60px] bg-gray-900 text-2xl font-bold text-white flex justify-evenly items-center">
        <div>My Shop</div>
        <div>Cart {} </div>
      </div>
    </>
  );
}

export default Navbar;
