import React from "react";

function ResCard() {
  return (
    <div className="w-[200px] h-[300px] border bg-gray-400 p-[5px] hover:cursor-pointer hover:border hover:border-black">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/ce36cfe6-15d9-41bb-b40f-feeff16fda7d_868315.jpg"
        alt=""
        className="w-[100%]"
      />
      <h3>Lorem ipsum</h3>
      <h4>Biryani,Bihar Indian</h4>
      <h4>4.4 Starts </h4>
      <h4>38 Min </h4>
    </div>
  );
}

export default ResCard;
