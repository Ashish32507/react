import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Random from "./Component/Random";
import Tag from "./Component/Tag";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex flex-col bg relative  overflow-y-auto items-center">
        <h1 className="bg-white h-10 rounded-md font-bold w-11/12 text-center my-[40px] text-3xl">
          RANDOM GIFS
        </h1>
        <div className="w-full flex flex-col items-center gap-y-10">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
}

export default App;
