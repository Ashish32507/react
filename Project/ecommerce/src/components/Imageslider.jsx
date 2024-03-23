import React, { useState } from "react";
import { useEffect } from "react";
import im1 from "..//assets/Imageslider/10010.jpg";
import im2 from "..//assets/Imageslider/10011.png";
import im3 from "..//assets/Imageslider/10012.png";
import im4 from "..//assets/Imageslider/10013.png";
import im5 from "..//assets/Imageslider/10014.jpg";
import im6 from "..//assets/Imageslider/10015.png";

function Imageslider() {
  const imageArray = [im1, im2, im3, im4, im5, im6];
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [imageArray.length]);
  return (
    <>
      <div className="w-full h-56 my-2 bg-black flex items-center justify-center">
        <img src={imageArray[index]} alt="" className="h-[100%]" />
      </div>
    </>
  );
}

export default Imageslider;
