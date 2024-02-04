import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");


  // use Ref Hook
  const passwordRef = useRef(null);

  const passwordGenrator =useCallback(()=>{
      let pass ="";
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed)
      {
        str+="0123456789";
      }
      if(characterAllowed)
      {
        str+="@*&%^$#~`";
      }
      for(let i=1;i<=length;i++)
      {
        let char = Math.floor((Math.random()*str.length+1));
        pass += str.charAt(char); 
      }
      setPassword(pass);

  },[length,characterAllowed,numberAllowed,setPassword]);

  const copyPassword= useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenrator();
  },[length,numberAllowed,characterAllowed,passwordGenrator])
  return (
    <>
      <div className="w-full h-screen bg-black m-0 flex flex-col items-center gap-10 py-5">
          <div className='h-16 w-[40%] bg-white font-bold text-3xl text-center py-2 rounded-md'>Password Genrator</div>
          <div className="w-[40%] h-28 bg-gray-800 rounded-md py-2">
            <div className='w-[100%] flex items-center justify-center py-2'>
                <input className='border-2 rounded-l-lg px-2 text-xl w-[75%] h-8 outline-none text-yellow-700' type="text" name="" id=""  value={password} readOnly ref={passwordRef} / >
                <button className='w-[15%] bg-blue-400 h-8 text-xl font-bold rounded-sm text-white rounded-r-lg' onClick={copyPassword()}>Copy</button>
            </div>
            <div className='w-[100%] h-10 flex items-center justify-center gap-1'>
              <div className='w-[45%]  flex gap-2 text-orange-400'>
                  <input type="range" name="" id="" min={6} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} />
                  <label htmlFor="">Length : {length}</label>
              </div>
              <div className='w-[20%]  flex gap-2 text-orange-400'>
                  <input type="checkbox" name="" id="number" defaultChecked={numberAllowed} onChange={()=>{ setNumberAllowed((prev)=>!prev)}}/>
                  <label htmlFor="number">Number</label>
              </div>
              <div className='w-[20%] flex gap-2 text-orange-400'>
                  <input type="checkbox" name="" id="character" defaultChecked={characterAllowed} onChange={()=>{setCharacterAllowed((prev)=>!prev)}}/>
                  <label htmlFor="character">Character</label>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
