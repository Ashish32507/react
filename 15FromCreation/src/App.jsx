import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    state:"",
    gender:"",
    cricket:true,
    hockey:true,
    vollyBall:true,
    password:""

  });
  // console.log(formData)
  function onchangeHandler(event)
  {
    const {name,value,type,checked} = event.target;
    setFormData(prevData=>{
      return {
        ...prevData,
        [name]:type==="checkbox"?checked:value
      }
    })
  }
  function submitHandler(event)
  {
    event.preventDefault();
    localStorage.setItem("Form",formData)
    console.log(formData)
  }
  return (
    <>
      <div className='h-screen w-full bg-slate-300'>
          <form action="" onSubmit={submitHandler}>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name='firstName' placeholder='First Name' id='name' onChange={onchangeHandler} />

              <label htmlFor=";astname">Last Name</label>
              <input type="text" placeholder='Last Name' name='lastName' id='lastname' onChange={onchangeHandler} />

              <label htmlFor="email">Email Id</label>
              <input type="email" placeholder='First Name' id='email' name='email' onChange={onchangeHandler} />

              <label htmlFor="state">Select Your State</label>
              <select name="state" id="state" value={FormData.state} onChange={onchangeHandler}>
                 <option value="select">Select</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Up">Up</option>
                  <option value="MP">MP</option>
                  <option value="UK">UK</option>
              </select>

              <label >Select Your Gender</label>
              <input type="radio" id='male' name='gender' value="Male" checked={formData.gender==="Male"} onChange={onchangeHandler}/>
              <label htmlFor="male">Male</label>
              <input type="radio" id='female' name='gender' value="Female" checked={formData.gender==="Female"}  onChange={onchangeHandler}/>
              <label htmlFor="female"  >Female</label> 
              
              <label htmlFor="">Select Your Hobbies</label>
              <label>Cricket</label>
              <input type="checkbox" onChange={onchangeHandler} name='cricket' checked={formData.cricket}/>

              <label>Hockey</label>
              <input type="checkbox" onChange={onchangeHandler} name='hockey' checked={formData.hockey}/>

              <label>vollyBall</label>
              <input type="checkbox" onChange={onchangeHandler} name='vollyBall' checked={formData.vollyBall}/>

              <label htmlFor="pass">Enter Your Password</label>
              <input type="password"  id='pass' name='password' onChange={onchangeHandler}/>

              <button>Submit</button>
          </form>
      </div>
    </>
  )
}

export default App
