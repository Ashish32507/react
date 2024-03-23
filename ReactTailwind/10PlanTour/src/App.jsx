import { useState } from 'react'
import MainCards from './components/MainCards/MainCards'
import './App.css'
import data from './components/data'


function App() {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !==id);
    setTours(newTours);
  }
  if(tours.length===0){
    return(
      <>
        <div className='h-[100vh] w-full flex items-center gap-5 justify-center flex-col'>
          <h2>No Tours Lefts</h2>
          <button onClick={()=>{setTours(data)}} className='w-[100px] h-[40px] bg-green-500 text-2xl'>Refresh</button>
        </div>
      </>
    )
  }
  return (
    <>
      <MainCards tours={tours} removeTour={removeTour}></MainCards>
    </>
  )
}

export default App
