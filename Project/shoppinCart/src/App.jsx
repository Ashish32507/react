import { useContext, useState } from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Product from "./Component/Product";
import CartItem from "./Component/CartItem";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden flex flex-col gap-10">
        <div className="fixed top-0 left-0 w-full z-50 ">
          <Navbar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<CartItem />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
