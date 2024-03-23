import React, { useState } from 'react';
import DataComponent from './Component/DataComponent/DataComponent';

function App() {
  const todoData = [
    {
      todo: "Hello",
      date: "2024-03-20"
    },
    // Other todo items...
  ];

  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [newItem, setNewItem] = useState(todoData);

  const addBtnHandle = () => {
    if (todo.trim() !== "" && date.trim() !== "") {
      setNewItem([
        ...newItem,
        {
          todo: todo,
          date: date
        }
      ]);
      setTodo("");
      setDate("");
    }
  };

  return (
    <div className='w-screen h-full'>
      <div className='h-14 text-3xl font-bold flex items-center justify-center my-3'>Todo App</div>
      <div className="w-full h-14 bg-slate-400 flex justify-center items-center gap-5">
        <div>
          <input type="text" placeholder="Enter Todo Here" value={todo} onChange={(e) => setTodo(e.target.value)} className="px-1 text-xl text-black focus:outline-none py-1" />
        </div>
        <div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-1 text-xl text-black focus:outline-none py-1" />
        </div>
        <div>
          <button className="px-4 text-white py-1 rounded-md text-2xl font-bold bg-green-600" onClick={addBtnHandle}>Add</button>
        </div>
      </div>
      {
        newItem.map((e, index) => (
          <DataComponent key={index} todo={e.todo} date={e.date} />
        ))
      }
    </div>
  );
}

export default App;
