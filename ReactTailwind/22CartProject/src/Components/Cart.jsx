import React, { useContext } from "react";
import { CartContext } from '../Context/Cart';

function Cart() {
    const cartData = useContext(CartContext);
    
    // Initialize total price
    let totalPrice = 0;

    // Iterate through items and calculate total price
    // cartData.items.forEach((item) => {
    //     totalPrice += item.price;
    // });

    return (
        <div className="cart">
            {/* <h1>Cart</h1> */}
            {
                console.log("Hello Ahish",cartData.items)
            }
            
            <ul>
                {
                //     cartData &&
                //    cartData.items.map((item) => (
                //     <li>
                //         {item.name} - ${item.price}
                // </li> 
                cartData &&
                 cartData.forEach((element) => (
                    console.log(element))
                )
                }
            </ul>
            {/* <h4>Total Price : ${totalPrice}</h4> */}
        </div>
    );
}

export default Cart;
