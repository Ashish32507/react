import React, { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/postlist_store";
import { useNavigate } from "react-router-dom";

function Createpost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const hashTagElement = useRef();

  const HandleSubmite = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const hashTag = hashTagElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    hashTagElement.current.value = "";

    addPost(userId, title, body, reaction, hashTag);

    navigate("/");
  };

  return (
    <>
      <form
        className="w-[50%] m-10 text-black space-y-6 dark:text-gray-100"
        onSubmit={HandleSubmite}
      >
        <div className="space-y-1">
          <label htmlFor="Title" className="font-medium text-black">
            Title
          </label>
          <input
            ref={titleElement}
            className="text-black h-10 px-2 text-xl w-full rounded-lg border focus:outline-none"
            type="text"
            id="Title"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="body" className="font-medium text-black">
            Body
          </label>
          <textarea
            ref={bodyElement}
            className="text-black h-20 py-1 px-2 text-xl w-full rounded-lg border
            focus:outline-none"
            type="text"
            id="Body"
          ></textarea>
        </div>
        <div className="space-y-1">
          <label htmlFor="userid" className="font-medium text-black">
            User Id
          </label>
          <input
            ref={userIdElement}
            className="text-black h-10 px-2 text-xl w-full rounded-lg border focus:outline-none"
            type="text"
            id="userid"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="reaction" className="font-medium text-black">
            Reaction
          </label>
          <input
            ref={reactionElement}
            className="text-black h-10 px-2 text-xl w-full rounded-lg border focus:outline-none"
            type="text"
            id="reaction"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="hash" className="font-medium text-black">
            Hash Tag
          </label>
          <input
            ref={hashTagElement}
            className="text-black h-10 px-2 text-xl w-full rounded-lg border focus:outline-none"
            type="text"
            id="hash"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
        >
          Post
        </button>
      </form>
    </>
  );
}

export default Createpost;
