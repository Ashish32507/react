import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './Components/About'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100%] h-screen bg-black'>
         <nav className='bg-white w-full h-[60px] flex items-center justify-between px-5'>
              <h2 className='font-bold text-xl'>Ashish Kumar</h2>
              <ul className='flex gap-5'>
                <li className='font-bold text-l'><NavLink to='/'>Home</NavLink></li>
                <li className='font-bold text-l'>Project</li>
                <li className='font-bold text-l'><NavLink to='/About'>About Us</NavLink></li>
                <li className='font-bold text-l'>Contact Us</li>
              </ul>
          </nav>
          <Routes>
        <Route element={<>Helllo You are at Home</>} path='/'></Route>
        <Route element={<About/>} path='/About'></Route>
        {/* <Route element={} path='/'></Route>
        <Route element={} path='/'></Route>
        <Route element={} path='/'></Route> */}
      </Routes>
    </div>
    </>
  )
}

export default App
