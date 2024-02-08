import React from "react";

function Spiner(){
    return(
           <div className="w-full h-[100%]  flex flex-wrap justify-center items-center">
             <div className="h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
             <p className="ml-2 text-gray-700">Loading...</p>
           </div>
    )
}

export default Spiner;