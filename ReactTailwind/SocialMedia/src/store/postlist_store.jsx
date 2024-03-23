import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT); // Corrected createContext usage

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList; // Corrected variable name
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList]; // Corrected variable name
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  // Corrected provider name
  const [postList, dispatchPostList] = useReducer(postListReducer, []); // Corrected variable name

  const addInitialPosts = (posts) => {
    // Corrected argument name
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts, // Corrected payload structure
      },
    });
  };

  const addPost = (userId, title, body, reactions, hashTag) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: hashTag,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Learn React",
//     body: "Hello Friend I Am Learning React",
//     reactions: 2,
//     userId: "Ashish Yadav",
//     tags: ["Learning", "Study", "react"],
//   },
//   {
//     id: "2",
//     title: "Learn CSS",
//     body: "Hello Friend I Am Learning CSS",
//     reactions: 15,
//     userId: "Yadav",
//     tags: ["Learning", "Study", "CSS", "Web"],
//   },
// ];

export default PostListProvider; // Corrected export name
