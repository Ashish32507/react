import { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Createpost from "./component/Createpost";
import PostlistProvider from "./store/postlist_store";
import PostLists from "./component/PostList";

function App() {
  const [itemTab, setItemTab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="w-[100%] flex overflow-x-hidden">
        <Sidebar setItemTab={setItemTab} />
        <div className="w-[100%]">
          <Header />
          {itemTab === "Home" ? <PostLists /> : <Createpost />}
          <Footer />
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
