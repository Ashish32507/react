import { useContext, useEffect, useState } from "react";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Pagination from "./component/Pagination";
import { AppContext } from "./context/AppContext";
function App() {
  const [count, setCount] = useState(0);
  const { fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center">
        <Header />
        <Blogs />
        <Pagination />
      </div>
    </>
  );
}

export default App;
