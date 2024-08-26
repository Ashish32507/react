import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F5F9]">
      <Navbar />
      <div className="flex flex-col lg:flex-row flex-1 my-5 px-10 gap-5">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:block rounded-lg">
          <Sidebar />
        </aside>
        {/* Main Content */}
        <main className="flex-1 lg:p-0 rounded-lg mt-4 lg:mt-0 border">
          <div className="max-w-screen-lg mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
