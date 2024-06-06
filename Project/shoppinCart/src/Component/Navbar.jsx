import React from "react";
import logo from "../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { cartItem } = useContext(StoreContext);
  return (
    <div className="w-[100%] bg-slate-950 h-16 flex text-slate-200 justify-around items-center">
      <div className="w-[150px] h-full flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link to="/" className="text-2xl font-semibold">
          Home
        </Link>
        <Link to="/cart" className="flex relative">
          <FaCartPlus className="text-3xl" />
          <p className="absolute -right-4 -top-2 bg-green-600 px-2 rounded-full font-semibold">
            {cartItem.length === 0 ? "" : cartItem.length}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
