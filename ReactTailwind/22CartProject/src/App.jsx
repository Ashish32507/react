import { useState } from 'react'
import Cards from './Components/Cards'
import './App.css'
import Cart from './Components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards name="Macebook" price={100000}/>
      <Cards name="Mobile" price={2000}/>
      <Cards name="Pendrive" price={50000}/>
      <Cards name="Tab" price={1000}/>
      <Cart/>
    </>
  )
}

export default App
