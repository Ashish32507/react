import React, { useState } from 'react';

function Cards({ id, name, price, info, image, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    const description =  readMore ? info:`${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <>
      <div className='h-[500px] w-[250px] border px-2 py-2 overflow-hidden flex flex-col gap-3'>
        <img src={image} alt="" className='w-[100%] object-cover' />
        <div className='w-[100%] h-72 '>
          <div>
            <h4 className='font-bold text-xl text-green-600'>₹ {price}</h4>
            <h4 className='font-bold text-xl text-black'>{name}</h4>
          </div>
          <div className='w-full text-justify text-black'>
            {description}
            <span onClick={readMoreHandler} className='text-blue-700 cursor-pointer'>
              {readMore ? 'Show Less' : 'Read More'}
            </span>
          </div>
        </div>
        <button className='w-[100%] h-12 text-2xl text-center bg-green-400' onClick={() => { removeTour(id) }}>Not Interested</button>
      </div>
    </>
  );
}

export default Cards;
