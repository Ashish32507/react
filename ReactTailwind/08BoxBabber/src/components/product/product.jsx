import React from "react";
import ProductItem from "../prodcutItem/productItem";
import ProductForm from "../newproductForm/ProductForm" 


function Product(props)
{
    console.log(props.data)
    return (
        <>
             {/* <ProductForm /> */}
            <div className="h-96 w-80 bg-yellow-300 flex flex-col items-center justify-center gap-2">
                <ProductItem day={props.data[0].day} month={props.data[0].month} year={props.data[0].year} name={props.data[0].name}/>
                <ProductItem day={props.data[1].day} month={props.data[1].month} year={props.data[1].year} name={props.data[1].name}/>
                <ProductItem day={props.data[2].day} month={props.data[2].month} year={props.data[2].year} name={props.data[2].name}/>
                <ProductItem day={props.data[3].day} month={props.data[3].month} year={props.data[3].year} name={props.data[3].name}/>
            </div>
        </>
    )
}

export default Product;