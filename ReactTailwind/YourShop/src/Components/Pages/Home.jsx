import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import MainProduct from "./Mainprodcut"; // corrected import name
import Productcategory from "./Productcategory";

function Home(props) {
  const [cat, setCat] = useState([]); // corrected initialization of state

  const [filterValue, setFilterValue] = useState("All");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((obj) => {
        setCat(obj); // corrected state update
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* {console.log(filterValue)} */}
      <div className="w-full h-16 bg-slate-600 px-10 whitespace-nowrap overflow-x-auto flex justify-center items-center outline-none">
        {cat.length === 0 && "Product Is Not Available "}
        <label htmlFor="filte" className="text-2xl font-bold ">
          Filter The Item :{"  "}
        </label>
        <select
          name=""
          id="filte"
          className="outline-none"
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        >
          <option
            value={"All"}
            className="outline-none"
            onChange={() => {
              setFilterValue("All");
            }}
          >
            All
          </option>
          {cat.map((pdcat, key) => (
            <option value={pdcat} className="outline-none">
              {pdcat}
            </option>
          ))}
        </select>
      </div>
      <MainProduct filterValue={filterValue} />
    </>
  );
}

export default Home;
