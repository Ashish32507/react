import { useState } from 'react'
import reviews from "./data"
import MainCards from './Components/Maincards/Maincards'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {
        console.log()
      }
      <div className='h-screen w-full bg-slate-300 flex flex-col items-center justify-center'>
        <div className='h-16 w-[40%] grid place-items-center text-3xl font-bold underline'>Our TestiMonial</div>
      <MainCards reviews={reviews} />
      </div>
    </>
  )
}

export default App
