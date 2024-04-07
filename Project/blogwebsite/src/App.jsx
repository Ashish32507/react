import { useContext, useEffect, useState } from "react";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Pagination from "./component/Pagination";
import { AppContext } from "./context/AppContext";
import { useSearchParams, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPages from "./Pages/BlogPages";
import TagPages from "./Pages/TagPages";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const [count, setCount] = useState(0);
  const { fetchData } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogPages />}></Route>
      <Route path="/tags/:tag" element={<TagPages />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
    </Routes>
  );
}

export default App;
