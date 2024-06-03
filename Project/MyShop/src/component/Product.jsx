import React, { useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
function Product(props) {
  const value = useContext(AppContext);
  const products = value.product;
  // const { thumbnail, price, brand } = product;

  return (
    <>
      {/* {products == " "
        ? " "
        : products.map((prodcut, inex) => {
            console.log(prodcut);
          })} */}
      {console.log("In Product Section")}
      {console.log(
        products == " "
          ? " "
          : products.products.map((element, index) => {
              console.log(element, index);
            })
      )}
      {/* {console.log(product.length)} */}
      {/* {console.log(products.title)} */}
      {}
      */
    </>
  );
}

export default Product;
