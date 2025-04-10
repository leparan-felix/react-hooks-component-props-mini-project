// App.js
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Assuming blog data is imported

function App() {
  return (
    <div className="App">
      <Header name="Dan's Blog" />
      <aside>
        <About 
          image="https://via.placeholder.com/215" 
          about="This is a blog about React and JavaScript." 
        />
      </aside>
      <main>
        <ArticleList posts={blogData} />
      </main>
    </div>
  );
}

export default App;
