import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails(props) {
  const post = props.post;
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold text-lg">{post.title}</p>
      </NavLink>
      <p className="text-[15px]">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold text-sm">{post.category} </span>{" "}
        </NavLink>
      </p>
      <p className="text-sm"> Posted On {post.date} </p>
      <p className="text-md mt-[10px]">{post.content}</p>
      <div className="">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span
                key={index}
                className="text-blue-500 underline text-xs font-semibold mx-1"
              >{`#${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default BlogDetails;
