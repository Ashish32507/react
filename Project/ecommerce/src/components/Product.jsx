import React, { useEffect, useState } from "react";

function Product(props) {
  const { description, category, discountPercentage, thumbnail, price, brand } =
    props.product;

  return (
    <>
      <div className="h-[350px] w-[250px] bg-white px-2 py-2 relative rounded-sm flex flex-col gap-1 group">
        <div className="absolute right-1 top-1 bg-[#00A098] text-white px-1 z-20 rounded-sm py-0">
          <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </div>
        <div className="object-cover rounded-sm overflow-hidden">
          <img
            src={thumbnail}
            alt=""
            className="h-[150px] w-full object-fill rounded-sm group-hover:scale-105"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-black">{brand}</h2>
        </div>
        <div className="w-full">
          <p className="text-xl text-black text-justify">
            {description.length > 40 ? description.substring(0, 40) : " "}
          </p>
        </div>
        <div className="w-full">
          <p className="text-xl font-bold text-black">
            ₹ <span>{price}</span>{" "}
          </p>
        </div>
        <button className="w-full h-9 bg-[#FB641B] text-white font-bold text-xl">
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Product;
