import React, { useState } from "react";

function TodoInput({ setInputData }) {
  const [input, setInput] = useState("");
  function newInput() {
    setInputData(input);
    setInput("");
  }
  return (
    <div className="bg-black">
      <div>
        <input
          value={input}
          type="text"
          placeholder="Enter The Todo :"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="bg-white w-16" onClick={newInput}>
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
