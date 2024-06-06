import React from "react";
import { useContext } from "react";
import { StoreContext } from "/Context/StoreContext";
import Cart from "./Cart";
function Product() {
  const { data } = useContext(StoreContext);
  return (
    <div className="bg-slate-500 flex flex-wrap items-center justify-center gap-5 py-24">
      {data.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        data.map((item, key) => <Cart item={item} key={key} id={item.id} />)
      )}
    </div>
  );
}

export default Product;
