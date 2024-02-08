import React, { useState } from "react";





function ProductItem(props)
{
    const [name,setTitle] = useState(props.name);
    
    function eventHandler(){
        setTitle("Ashish");
        console.log("Hello")
    }

    return (
        <>
            <div className="w-[90%] h-20 bg-green-500 flex items-center justify-between px-1">
                <div className="h-[90%] bg-black w-20 flex flex-col items-center justify-center">
                    <p>{props.year}</p>
                    <p>{props.month}</p>
                    <p>{props.day}</p>
                </div>
                <div>
                    <h4>{name}</h4>
                </div>
                <button onClick={eventHandler} >Click Me</button>
            </div>
        </>
    )
}

export default ProductItem;