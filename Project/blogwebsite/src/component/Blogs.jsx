import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  // consume
  const { loading, posts } = useContext(AppContext);
  console.log("Printing inside blogs component");
  console.log(posts);
  return (
    <>
      <div className="w-11/12 max-w-[550px] flex flex-col gap-y-8 my-[80px] mb-[70px]">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>No Post Found</div>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <p className="font-bold text-lg">{post.title}</p>
              <p className="text-[15px]">
                {" "}
                By <span className="italic">{post.author}</span> on{" "}
                <span className="underline font-bold text-sm">
                  {" "}
                  {post.category}{" "}
                </span>
              </p>
              <p className="text-sm"> Posted On {post.date} </p>
              <p className="text-md mt-[10px]">{post.content}</p>
              <div className="">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-blue-500 underline text-xs font-semibold mx-1"
                    >{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Blogs;
