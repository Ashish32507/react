import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Blogs from "../component/Blogs";
import Pagination from "../component/Pagination";
function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs On <span>#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
