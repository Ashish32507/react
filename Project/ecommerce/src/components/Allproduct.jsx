import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";

function Allproduct() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* {console.log("In the Main Cart :" + filterValue)} */}
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-4 z-0 py-5">
        {productList.length === 0 && <p>Products Not Available</p>}
        {productList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Allproduct;
