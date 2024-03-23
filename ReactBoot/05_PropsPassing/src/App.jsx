import { useState } from 'react'
import Name from './Componets/Name';


function App() {
  const name = ["Ashish","Aman","Sonu","Yadav","Kumar"];
  return (
    <>
     <h1 className='text-3xl text-center font-bold'>Hello Ashish</h1>
     <hr />
     <ul>
      {
       name.map((item)=>(
          <Name key={item} data={item}/>
       ))
      } 
     </ul>
    </>
  )
}

export default App
