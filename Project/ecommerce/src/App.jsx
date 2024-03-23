// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footerbar from "./components/Footerbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full h-full bg-slate-100 overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footerbar />
      </div>
    </>
  );
}

export default App;
