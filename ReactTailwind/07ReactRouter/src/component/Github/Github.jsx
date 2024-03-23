import {React,useEffect, useState } from "react";
// import { json } from "react-router-dom";
function Github(){
    const [data,setData]=useState([]);
    console.log(data);
    useEffect(()=>{
        // fetch('https://github.com/Ashish32507')
        // .then(response=>response.json())
        // .then((data)=>{
        //     setData(data);
        // })
    async function dataFetch(){
        const data = await fetch(' https://api.github.com/users/Ashish32507');
        const res = await data.json();
        setData(res);
    }
    dataFetch();
    },[])
    console.log(data);
    return(
        <>
            Hello {data.followers}
            <img src={data.avatar_url} alt="" />
        </>
    )
}
export default Github;