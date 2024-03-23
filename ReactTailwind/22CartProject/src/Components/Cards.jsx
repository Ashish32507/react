import React from "react";
import { useContext } from "react";
import {CartContext} from '../Context/Cart'
function Cards(props)
{
    const cart = useContext( CartContext)
    console.log(cart)
    return (
          <div>
            <h1>{props.name}</h1>
            <h4>{props.price}</h4>
            <button onClick={()=>{cart.setItem(...cart.items,{name:props.name,price:props.price})}}>Add To Cart</button>
          </div>
    )
}

export default Cards;