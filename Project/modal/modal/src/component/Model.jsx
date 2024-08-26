import React from "react";
import "./model.css";
function Model({ modelClose }) {
  return (
    <div className="modal">
      <h1>Hello Ashish This From Modal</h1>
      <button onClick={modelClose}>Close</button>
    </div>
  );
}

export default Model;
