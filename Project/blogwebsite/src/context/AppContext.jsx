import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// Step 1
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(null);
  const navigate = useNavigate();

  async function fetchData(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      // let url = `${baseUrl}?page=${page}`;
      const respones = await fetch(url);
      const data = await respones.json();
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log("Error App Context Api");
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  }
  function handlePageChange(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
    // fetchData(page);
  }

  const value = {
    posts,
    setPage,
    setPosts,
    loading,
    page,
    setTotalPage,
    totalpage,
    setLoading,
    handlePageChange,
    fetchData,
  };

  // Step 2

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
