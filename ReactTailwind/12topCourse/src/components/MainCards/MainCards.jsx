import React, { useCallback, useState } from "react";
import Cards from "../Cards/Cards";

function MainCards(props) {
  // return courses list
  let course = props.course;
  let cat = props.cat;
  const [likedCourse,setLikedCourses] = useState([]);
  const getCourses = () => {
    if(cat==="All")
    {
      return Object.values(course).flat();
    }
    else{
      return course[cat];
    }
  };

  return (
    <div className="w-full h-[100%]  flex flex-wrap justify-center items-center gap-8 ">
      {getCourses().map((courseData, index) => (
        <Cards key={index} courseData={courseData} likedCourse={likedCourse} setLikedCourses={setLikedCourses}/>
      ))}
    </div>
  );
}

export default MainCards;
