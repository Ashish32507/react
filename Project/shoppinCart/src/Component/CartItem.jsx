import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import CartProduct from "./CartProduct";

function CartItem() {
  const { cartItem } = useContext(StoreContext);
  const [totalamt, setTotal] = useState(0);

  useEffect(() => {
    const total = cartItem.reduce((sum, item) => sum + item.price, 0);
    setTotal(total);
  }, [cartItem]);

  return (
    <div className="w-full py-24 flex justify-center items-start gap-20">
      <div className="w-[600px] flex flex-col">
        {cartItem.map((item, key) => (
          <CartProduct key={key} item={item} />
        ))}
      </div>
      <div className="w-[400px] bg-white p-4 rounded-md">
        <div>
          <h2 className="font-bold text-lg text-green-600">YOUR CART</h2>
          <h2 className="font-bold text-green-600 text-4xl">SUMMARY</h2>
          <p className="font-semibold text-green-600">
            Total Item: {cartItem.length}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg">
            Total Amount: ${totalamt.toFixed(2)}
          </h2>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md mt-4">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
