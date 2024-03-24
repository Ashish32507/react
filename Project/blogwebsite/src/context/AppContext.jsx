import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(null);

  async function fetchData(page = 1) {
    setLoading(true);
    try {
      let url = `${baseUrl}?page=${page}`;
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
    setPage(page);
    fetchData(page);
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
