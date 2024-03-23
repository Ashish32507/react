import React from "react";
import PrdocutForm from "../newproductForm/ProductForm";



function AddNewProcut(props)
{
    function saveProduct(product){
        console.log("i am insdie new product")
        console.log(product);


        // calling parent fun
        props.ashish(product);
    }
    return (
        <>
            <PrdocutForm onSaveProduct={saveProduct} />
        </>
    )
}

export default AddNewProcut;
