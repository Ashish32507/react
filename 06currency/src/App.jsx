import { useState } from 'react'
import {InputBox} from './component'
import useCureencyInfo from './hooks/currencyInfo'

import './App.css'

function App() {
  const [amout,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCureencyInfo(from);

  const option = Object.keys(currencyInfo);

  const swap =()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amout);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }



  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}
            
            </select>
        </div>
    </div>
);

  // return (
  //   <>
      

  //    {/* <div className='w-full h-screen flex items-center justify-center'>
  //       <div className='h-72 w-[50%] bg-blue-100  flex flex-col items-center justify-center gap-3 rounded-md relative'>
  //         <button className='absolute font-bold h-8 top-24 p-0 w-20 bg-blue-500 text-xl rounded-md text-white'>Swap</button>
  //           <div className='h-24 w-[80%] bg-white px-4 flex flex-col gap-3 py-2 rounded-md'>
  //             <div className='w-[100%] h-8  flex justify-between text-l font-bold'>
  //               <div>From</div>
  //               <div>Currency Type</div>
  //             </div>
  //             <div className='w-[100%] h-8  flex justify-between items-center text-l font-bold'>
  //               <div><input type="text" placeholder='0' className='outline-none'/></div>
  //               <div>
  //                 <select name="" id="" className='w-20'>
  //                  <option value="">USD</option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>
  //           <div className='h-24 w-[80%] bg-white px-4 flex flex-col gap-3 py-2 rounded-md'>
  //             <div className='w-[100%] h-8  flex justify-between text-l font-bold'>
  //               <div>TO</div>
  //               <div>Currency Type</div>
  //             </div>
  //             <div className='w-[100%] h-8  flex justify-between items-center text-l font-bold'>
  //               <div><input type="text" placeholder='0' className='outline-none'/></div>
  //               <div>
  //                 <select name="" id="" className='w-20 '>
  //                  <option value="">USD</option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>
  //           <button className='h-10 w-[70%] bg-blue-500 rounded-md text-white font-bold text-xl'>Convert</button>
  //       </div>
  //    </div> */}
  //   </>
  // )
}

export default App
