import React from "react";
function DataComponent(props){
    return (
        <> 
            {
                console.log(props)
            }
              <div className="w-full h-14 flex justify-center items-center gap-5 my-2">
                <div>
                    <input type="text"  placeholder="Enter Todo Here" className="px-1 text-xl text-black focus:outline-none py-1 border-2" value={props.todo} disabled />
                </div>
                <div>
                    <input type="date"  className="px-1 text-xl text-black focus:outline-none py-1 border-2" value={props.date} disabled />
                </div>
                <div>
                    <button className="px-4 text-white py-1 rounded-md text-2xl font-bold bg-red-600">Delete</button>
                </div>
            </div>
        </>
    )
}

export default DataComponent