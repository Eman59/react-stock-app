import React from "react";
import ArticleList from "../components/ArticleList";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>US Stocks Articles</h1>
      <ArticleList />
    </div>
  );
};

export default Home;
