import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../component/Product";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Mainproduct() {
  // const [productList, setProductList] = useState([]);
  const value = useContext(AppContext);

  return (
    <>
      {console.log(value.product)}
      {console.log(product.products)}
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-4 z-0 py-5">
        {value.product.products.length === 0 && <p>Products Not Available</p>}
        {value.product.products.slice(0, 8).map((products, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Mainproduct;
