import { useState } from "react";
import TodoInput from "./Component/TodoInput";
import ToDoItem from "./Component/ToDoItem";

function App() {
  const [inputData, setInputData] = useState(""); // Initialize inputData with an empty string
  const [todos, setTodos] = useState([]); // Rename todo to todos for consistency

  function addData() {
    if (inputData.trim() !== "") {
      // Check if inputData is not empty
      setTodos([...todos, { id: Date.now(), text: inputData }]);
      setInputData(""); // Clear inputData after adding a todo
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function update(id, newtext) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, text: newtext }; // Update the text property of the item
        }
        return item;
      })
    );
  }

  return (
    <div>
      <div>
        <input
          value={inputData}
          type="text"
          placeholder="Enter The Todo :"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="bg-white w-16" onClick={addData}>
          +
        </button>
      </div>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <input
              value={item.text}
              type="text"
              placeholder="Enter The Todo :"
              onChange={(e) => update(item.id, e.target.value)} // You can add functionality here to update todo
            />
            <button
              className="bg-white w-16"
              onClick={() => deleteTodo(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
