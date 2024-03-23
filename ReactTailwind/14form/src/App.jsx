import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLasttName]=useState("");

  // function firstNameHandler(event){
  //   console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }
   
  // function lastNameHandler(event){
  //   console.log(event.target.value)
  //   setLasttName(event.target.value)
  // }


  const [formData,setFormData]=useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      textArea:"",
      isVisible:true,
      gender:"",
      option:""
    }
  );

  // console.log(formData)

  function changeHandler(event){
    const {name,value,type,checked} = event.target;
    setFormData(prevData=>{
      return {
        ...prevData,
        [name]:type==="checkbox"?checked:value
      }
    });    
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" value={formData.firstName} placeholder='First Name' onChange={changeHandler} name='firstName'/>
        <input type="text" value={formData.lastName} placeholder='Last Name' onChange={changeHandler}  name='lastName'/>
        <input type="email" value={formData.email} placeholder='Email Id' onChange={changeHandler}  name='email'  />
        <textarea name="textArea"  id="" cols="30" rows="10" value={formData.textArea} placeholder='Comments' onChange={changeHandler}></textarea>
        <input type="checkbox" id='cri' checked={formData.isVisible} onChange={changeHandler} name='isVisible'/>
        <label htmlFor="cri">Cricket</label>
        <label htmlFor="male">Male</label>
        <input type="radio" id='male' name='gender' onChange={changeHandler} value="Male" checked={formData.gender==="Male"}/>
        <label htmlFor="female" >FeMale</label>
        <input type="radio" id='female' name='gender' onChange={changeHandler} value="Female" checked={formData.gender==="Female"} />



        <select name="option" id="option" value={formData.option} onChange={changeHandler}>
          <option value="Select">Select</option>
          <option value="Ashish">Ashish</option>
          <option value="Anish">Anish</option>
          <option value="Vaibhav">Vaibhav</option>
        </select>

        <button >Submite</button>
        {/* <input type="submit" /> */}
      </form>
    </>
  )
}

export default App
