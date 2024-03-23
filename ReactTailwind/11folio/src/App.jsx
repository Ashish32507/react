import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [text,setText] = useState('');

  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }


  // veriation 1
  // useEffect(()=>{
  //   console.log("Your Ui are render");
  // });

  // veriation 2
  useEffect(()=>{
    console.log("Your Ui are render");
  },[]); 

  return (
    <>
      <input type="text" onChange={changeHandler} className='border'/>
    </>
  )
}

export default App
