import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full bg-[#F2F5F9] pb-10">
        <Navbar />
        <Menu />
        <div className="w-full h-full flex flex-wrap justify-between px-10">
          <Sidebar />
          <div className="w-[800px] border h-[800px] bg-white rounded-md scroll-smooth">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
