import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let cat=props.cat;
  let setCat=props.setCat;

  function catHanlder(title){
    setCat(title);
  }
  return (
    <div className="w-full h-14 my-4 flex items-center justify-center gap-2">
      {filterData.map((data, index) => (
        <button 
          onClick={()=>catHanlder(data.title)}
          key={index}
          className="bg-gray-950 text-white px-1 py-0 text-xl rounded-sm hover:border hover:border-white ">
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
