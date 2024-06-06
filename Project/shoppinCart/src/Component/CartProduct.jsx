import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { MdDeleteForever } from "react-icons/md";

function CartProduct({ item }) {
  const { cartItem, removeFromCart } = useContext(StoreContext);
  const btnHandler = (item, e) => {
    e.preventDefault();
    removeFromCart(item.id);
  };
  return (
    <>
      <div className="flex gap-5 items-center justify-center px-5 text-justify rounded bg-white h-[250px]">
        {cartItem.length === 0 ? (
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold">Cart is Empty</h2>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center overflow-hidden object-cover">
              <img
                className="aspect-square h-[200px] w-[600px] rounded-md"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start justify-center py-2 text-justify">
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.description.substring(0, 180) + " ..."}</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h5 className="text-green-600 font-bold text-xl">
                  ${item.price}
                </h5>
                <button
                  onClick={(e) => {
                    btnHandler(item, e);
                  }}
                >
                  <MdDeleteForever
                    className="bg-red-700 p-2 text-4xl font-bold rounded-full text-white"
                    //   onClick={removeFromCart(index)}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <hr className="h-5 w-full" />
    </>
  );
}

export default CartProduct;
