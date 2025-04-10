// ArticleList.js
import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  // Ensure posts is an array before calling .map()
  if (!Array.isArray(posts)) {
    console.error("Expected posts to be an array, but got:", posts);
    return null;
  }

  return (
    <main>
      {posts.map(post => (
        <Article key={post.id} title={post.title} content={post.content} />
      ))}
    </main>
  );
};

export default ArticleList;
