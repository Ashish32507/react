import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =0;

  let [counter,setCounter] = useState(0); 

  function addValue(){
    counter++;
    // console.log(counter);
    setCounter(counter);
  }
  function removeValue(){
    if(counter<=0)
    {
      alert("You can Not Remove The Value");
      return;
    }
    counter--;
    // console.log(counter);
    setCounter(counter);
  }

  return (
    <>
     <h1>Cahi Aur React</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
