import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import { addTocart } from "./redux/slice";
// import {Provider } from 'react-redux'
function App() {
  const [count, setCount] = useState(0);
  const dispacth = useDispatch();
  const addingToCart = () => {
    dispacth(addTocart);
  };
  return (
    <>
      <Navbar />
      <h1>This Is React Redux Toolkit</h1>
      <button onClick={addingToCart}></button>
    </>
  );
}

export default App;
