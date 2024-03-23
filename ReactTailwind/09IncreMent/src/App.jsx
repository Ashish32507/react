import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1)
  }
  function increaseHandler(){
    setCount(count+1)
  }
  function resetHandler(){
    setCount(0)
  }

  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-[#344151] flex flex-col items-center justify-center gap-10'>
        <div className='text-[#0398d4] text-2xl'>Increment And Decrement Value</div>
        <div className='bg-white flex justify-center items-center gap-12 rounded-sm py-2 text-[25px] text-[#344151]'>
          <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
          <div className='font-bold gap-12 text-5xl'>{count}</div>
          <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
        </div>
        <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
      </div>
    </>
  )
}

export default App
