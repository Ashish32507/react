import { useState } from 'react'

function App() {
  
  let [value,setValue] = useState(0);

  function increment()
  {
    setValue(value+1);
  }

  function decrement()
  {
    setValue(value=value-1);
  }

  function reset(){
    setValue(0);
  }
  return (
    <>
      <div className='h-[200px] w-[50%] bg-slate-500 mx-auto my-10 flex flex-col gap-4 justify-center items-center'>
        <div className='w-[100%] flex gap-1 justify-center items-center'>
          <div className='h-10 w-24 text-center bg-slate-900 flex items-center justify-center text-2xl font-bold text-white hover:cursor-pointer select-none' onClick={decrement} >-</div>
          <div className='h-10 w-24 text-center bg-slate-900 flex items-center justify-center text-2xl font-bold text-white'>{value}</div>
          <div className='h-10 w-24 text-center bg-slate-900 flex items-center justify-center text-2xl font-bold text-white hover:cursor-pointer select-none' onClick={increment}>+</div>
        </div>
        <div className='h-10 w-24 text-center bg-slate-900 flex items-center justify-center text-2xl font-bold text-white hover:cursor-pointer select-none' onClick={reset}>Reset</div>
      </div>
    </>
  )
}

export default App
