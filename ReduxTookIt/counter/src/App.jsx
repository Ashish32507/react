import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/slices/CounterSlices";

function App() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(increament());
          }}
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            dispatch(decreament());
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
