import React, { useEffect, useState } from "react";

function Product(props) {
  const { description, category, discountPercentage, thumbnail, price, brand } =
    props.product;

  const [cartData, setCartData] = useState({});

  const productData = () => {
    const cartProductObject = {
      description: description,
      category: category,
      discountPercentage: discountPercentage,
      thumbnail: thumbnail,
      price: price,
      brand: brand,
    };

    console.log("Product Added to Cart:");
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("Discount Percentage:", discountPercentage);
    console.log("Thumbnail:", thumbnail);
    console.log("Price:", price);
    console.log("Brand:", brand);

    setCartData(cartProductObject);
  };

  return (
    <>
      {/* {/* {console.log("Prodcut Section")} */}
      {/* {console.log("in prodcut Section" + props.product.brand)} */}

      <div className="h-[350px] w-[250px] bg-gray-600 px-2 py-2 relative rounded-sm flex flex-col gap-1">
        <div className="absolute right-1 top-1 bg-red-400 px-1 z-20 rounded-sm py-0">
          <span>{category}</span>
        </div>
        <div className="object-cover rounded-sm overflow-hidden">
          <img
            src={thumbnail}
            alt=""
            className="h-[150px] w-full object-fill rounded-sm hover:scale-105"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white">{brand}</h2>
        </div>
        <div className="w-full">
          <p className="text-xl text-white text-justify">
            {description.length > 40 ? description.substring(0, 40) : " "}
          </p>
        </div>
        <div className="w-full">
          <p className="text-xl font-bold text-white">
            ₹{" "}
            <span>
              <strike>{price}</strike>
            </span>{" "}
            <span>{discountPercentage}</span>
          </p>
        </div>
        <button
          className="w-full h-9 bg-green-600 text-black font-bold text-xl"
          onClick={productData}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Product;
