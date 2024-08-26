import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const { k } = useSelector((store) => store.cart);
  return (
    <div>
      <div>
        Counter <span>{k}</span>
      </div>
    </div>
  );
}

export default Navbar;
