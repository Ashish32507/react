import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Mainproduct from "./component/Mainproduct";

function App() {
  const { count, increment, decrement } = useContext(AppContext);
  return (
    <>
      <Navbar />
      {/* <Mainproduct /> */}
      <Product />
    </>
  );
}

export default App;
