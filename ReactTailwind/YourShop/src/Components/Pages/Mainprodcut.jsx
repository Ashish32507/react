import React, { useState, useEffect } from "react";
import Product from "./Product";

function MainProduct(props) {
  const filterValue = props.filterValue;

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
        {filterValue === "All"
          ? productList.map((product, index) => (
              <Product key={index} product={product} />
            ))
          : productList
              .filter((product) => product.category === filterValue)
              .map((filteredProduct, index) => (
                <Product key={index} product={filteredProduct} />
              ))}
      </div>
    </>
  );
}

export default MainProduct;
