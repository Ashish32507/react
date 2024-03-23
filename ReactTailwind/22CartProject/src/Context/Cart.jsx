import { createContext, useState } from "react";


export const CartContext = createContext(null);
export const CartsProvider  = (props)=>{
    const [items,setItem] = useState([])
    return (
        <CartContext.Provider value={{items,setItem}}>
            {props.children}
        </CartContext.Provider>
    )
}