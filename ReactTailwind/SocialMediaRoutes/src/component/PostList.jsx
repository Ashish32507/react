import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList } from "../store/postlist_store";
import Welcome from "./Welcome";

function PostLists() {
  const { postList, addInitialPosts } = useContext(PostList);

  // const getPost = () => {
  //   console.log("Get Post Clicked");
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((obj) => {
  //       // console.log(obj.posts);
  //       addInitialPosts(obj.posts);
  //     });
  // };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        // console.log(obj.posts);
        addInitialPosts(obj.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostLists;
