import React from "react";
import Cards from '../Cards/Cards'

function MainCards({tours,removeTour})
{
    return (
        <> 
            <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <div className="h-28 w-[70%] flex items-center justify-center ">
                    <h2 className="text-3xl font-bold border-dotted border-8 px-8 py-2 text-center border-green-500 w-[40%] rounded-full">Plan With Love</h2>
                </div>
                <div className="w-[70%] h-full flex flex-wrap items-center justify-center gap-10">
                    {
                        tours.map((tour) => {
                            // console.log(tour)
                            return <Cards {...tour} removeTour={removeTour}></Cards>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MainCards;
