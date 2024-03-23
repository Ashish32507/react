import React from "react";
import { MdDelete } from "react-icons/md";

function Cart(props) {
  const data = props.data;
  const prodcut = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  };

  return (
    <>
      {console.log("Porps Data :" + data)}
      <div className="h-screen overflow-hidden bg-slate-700 flex flex-col items-center">
        <div className="w-full h-16 bg-slate-300 flex items-center justify-center text-2xl font-bold px-10">
          Your Products
        </div>
        <div className="w-[90%] h-24 bg-yellow-100 my-5 px-10 flex justify-between items-center rounded-sm">
          <div className="h-full flex justify-center items-center">
            <img
              src={prodcut.thumbnail}
              alt="Product Thumbnail"
              className="h-[80px] rounded-lg"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <p className="text-2xl font-bold">{prodcut.brand}</p>
          </div>
          <div className="h-full flex justify-center items-center gap-2">
            <button className="p-2  text-3xl font-bold">-</button>
            <div className="p-2 text-2xl font-bold">0</div>
            <button className="p-2 text-3xl font-bold">+</button>
          </div>
          <div className="h-full flex justify-center items-center">
            <p className="text-2xl font-bold">₹ {prodcut.price}</p>
          </div>
          <div className="h-full flex justify-center items-center">
            <MdDelete className="text-3xl text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
