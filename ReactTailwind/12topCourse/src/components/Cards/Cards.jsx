import React from "react";
import { FcLike } from "react-icons/fc";
// import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";

function Cards(props) {
  let courseData = props.courseData;
  let likedCourse = props.likedCourse;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourse.includes(courseData.id))
    {
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==courseData.id)));
      // toast
    }
    else
    {
      if(likedCourse.length===0)
      {
        setLikedCourses([courseData.id]);
      }
      else
      {
        setLikedCourses((prev)=>[...prev,courseData.id])
      }
      // toast
    }
  }

  return (
    <>
      <div className="w-[320px] h-[330px] bg-gray-800 border  relative rounded-sm overflow-hidden">
        <div className="w-full bg-gray-800">
          <img className="w-full rounded-sm" src={courseData.image.url} alt="" />
          <div className="w-[40px] h-[40px] absolute right-2 top-[135px] bg-white rounded-full grid place-items-center">
            <button onClick={clickHandler}>
              {
                likedCourse.includes(courseData.id)?(<FcLike fontSize="2rem" />):(<FcLikePlaceholder fontSize="2rem" />
                )
              }
            </button>
          </div>
        </div>
        <div className="w-full px-2 py-2 bg-gray-800">
          <p className="font-bold text-2xl text-white">{courseData.title}</p>
          <p className="text-white text-x">
            {
              courseData.description.length>100?(courseData.description.substr(0,100)+" ..."):(courseData.description)
            }
            </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
