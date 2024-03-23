import React, { useState } from "react";
import AddNewProcut from "../newProduct/newproduct";

function ProductForm(props)
{

    // const [fullProductInput,setFullProductInput] = useState({
    //     title:'',
    //     date:''
    // });

    // function setFullProductInput(event,prevState){
    //     // return object
    //     return {...prevState,title:event.target.value}
    // }

    const [newtitle,setTile] = useState('');
    const [newdate,setDate]=useState('');

    function titleChangeHandler(event)
    {
        // console.log()
        // console.log(event.target.value)
        setTile(event.target.value);
       
    }
    function dateChangeHandler(event)
    {
        // console.log(event.target.value)
        // console.log(event.target.value)
        setDate(event.target.value);
        console.log(newtitle);
        console.log(newdate);
        
    }
    function btnHandler(event){
        event.preventDefault();
        const productData={
            title:newtitle,
            date:newdate
        }
        console.log(productData)

        // props.saveProduct(productData);
        props.saveProduct(productData)
        
        setDate('');
        setTile('');
    }
    return(
        <form onSubmit={btnHandler}>
            <div className="w-[80%] h-36 bg-blue-950">
               <div>
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" value={newtitle} onChange={titleChangeHandler}/>
               </div>
               <div>
                   <label htmlFor="date">Date</label>
                   <input type="date" id="date" value={newdate} min='2021-12-12' max='2024-12-31' onChange={dateChangeHandler}/>
               </div>
               <div>
                   <button type="submit">Add Product</button>
               </div>
            </div>
        </form>
    )
}

export default ProductForm;