import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Cards(props){
    let reviews = props.reviews;
    let [index,setIndex]=useState(0);
    let reviewLen =reviews.length-1;
    function nextHandler()
    {
        if(reviewLen===index)
        {
            console.log("Before Ste Up")
            console.log(index)
            setIndex(0)
        }
        else{
            console.log(index)
            setIndex(index=index+1)
        }
    }
    function prevHandler()
    {
        if(reviewLen===index )
        {
            console.log("Before Ste Up")
            console.log(index)
            setIndex(0)
        }
        else{
            if(index===0)
            {
                setIndex(0)
            }
            else if(index>0){
                console.log(index)
                setIndex(index=index-1)
            }
        }
    }
    return(
        <>
            <div className="h-[65%] w-[50%] bg-white relative py-5 px-5 flex flex-col items-center justify-center">
                <div className="h-28 w-28 bg-black absolute -top-16 left-5 rounded-full shadow-lg">
                    <img src={reviews[index].image} alt="" className="h-[100%] w-[100%] rounded-full" />
                </div>
                <div className="w-full h-[100%] flex flex-col items-center justify-center">
                    <div className="w-full h-[100%] flex flex-col items-center justify-center gap-1">
                        <h2 className="font-semibold text-2xl">{reviews[index].name}</h2>
                        <p className="font-medium text-xl">{reviews[index].job}</p>
                        <p className="font-bold text-2xl text-white"><FaQuoteLeft /></p>
                        <p className="text-justify ">{reviews[index].text}</p>
                        <p className="font-bold text-2xl text-white"><FaQuoteRight /></p>
                        <div className="flex w-[100%] h-12 items-center justify-center">
                            <button onClick={prevHandler}><GrFormPrevious fontSize="3rem"/></button>
                            <button onClick={nextHandler}><GrFormNext fontSize="3rem" /></button>
                        </div>
                        <button className="w-44 h-12 my-2 bg-blue-500 text-white px-1 py-1 text-2xl font-semibold rounded-sm ">Surprise Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;