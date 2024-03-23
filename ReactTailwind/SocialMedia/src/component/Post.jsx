import React from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postlist_store";
import { useContext } from "react";

const Post = (props) => {
  const { id, title, body, reactions, userId, tags } = props.post;

  const { deletePost } = useContext(PostList);
  return (
    <>
      {console.log(props)}
      <div className="rounded overflow-hidden shadow-lg m-5 relative w-[600px]">
        <div className="px-6 py-4">
          <div
            className="absolute right-2 text-3xl top-0"
            onClick={() => deletePost(id)}
          >
            <MdDelete className="text-white bg-red-600" />
          </div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{body}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 bg-blue-500">
              {tag}
            </span>
          ))}
        </div>
        <div className="px-6 pt-4 pb-2 w-full">
          <span className=" w-full inline-block rounded-sm px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 bg-green-300">
            This Post Has Been Reacted By {reactions} People
          </span>
        </div>
      </div>
    </>
  );
};

export default Post;
