import React from "react";

function Name(props){
   
    return(
        <>
            <li className="text-center border-2 text-2xl py-2">{props.data}</li>
        </>
    );
}

export default Name