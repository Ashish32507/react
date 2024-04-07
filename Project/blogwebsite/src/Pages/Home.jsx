import React from "react";
import Blogs from "../component/Blogs";
import Pagination from "../component/Pagination";
import Header from "../component/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <Blogs />
        <Pagination />
      </div>
    </>
  );
}

export default Home;
