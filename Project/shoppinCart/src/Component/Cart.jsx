import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

export default function Cart({ item, id }) {
  const { addToCart, cartItem, removeFromCart } = useContext(StoreContext);
  const isInCart = cartItem.some((cartItem) => cartItem.id === item.id);
  return (
    <div className="w-[270px] h-[500px] bg-white flex flex-col items-center justify-start gap-4 px-2 rounded-md overflow-hidden group hover:scale-110 transition-transform duration-300">
      <div className="text-center w-full pt-2">
        <h2 className="font-bold text-2xl group-hover:text-blue-600 transition-colors duration-300">
          {item.title.substring(0, 14) + " ..."}
        </h2>
        <p className="text-gray-700 group-hover:text-blue-400 transition-colors duration-300">
          {item.description.substring(0, 50) + "...."}
        </p>
      </div>
      <div className="w-full flex justify-center items-center overflow-hidden">
        <img
          className="w-[100%] rounded-md aspect-square h-80 group-hover:scale-105 transition-transform duration-300"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-green-600 font-bold text-xl group-hover:text-green-800 transition-colors duration-300">
          ${item.price}
        </h2>
        <button
          className="border-2 px-4 text-xl font-semibold rounded-full border-black group-hover:bg-black group-hover:text-white transition-colors duration-300"
          onClick={() => {
            isInCart ? removeFromCart(item.id) : addToCart(item);
          }}
        >
          {isInCart ? "Remove Item" : "Add Item"}
        </button>
      </div>
    </div>
  );
}
