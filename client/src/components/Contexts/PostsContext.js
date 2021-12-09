import React, { createContext, useState, useEffect } from "react";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsStatus, setPostsStatus] = useState("loading");

  useEffect(() => {
    // get all posts

    setPostsStatus("loading");
    fetch(`/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setPostsStatus("idle");
      });
  }, []);

  return (
    <PostsContext.Provider
      value={{
        postsStatus,
        setPostsStatus,
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
