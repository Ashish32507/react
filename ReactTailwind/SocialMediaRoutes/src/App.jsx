import { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Createpost from "./component/Createpost";
import PostlistProvider from "./store/postlist_store";
import PostLists from "./component/PostList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostlistProvider>
      <div className="w-[100%] flex overflow-x-hidden">
        <Sidebar />
        <div className="w-[100%]">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
