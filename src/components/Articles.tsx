import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../types";
import "./Articles.scss";

interface ArticlesProps {
  currentArticles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ currentArticles }) => {
  const formatDate = (dateString: string) => {
    const options: { month: "long"; day: "numeric"; year?: "numeric" } = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className="articles-container">
      {currentArticles.length === 0 ? (
        <div className="no-results">
          <h2>No result found for selection.</h2>
        </div>
      ) : (
        currentArticles.map((article, index) => (
          <div key={index} className="articles-wrapper">
            <div className="articles-header">
              <span className="tag">{article.source}</span>

              <img
                src={
                  `https://dev-storm-rest-api.pantheonsite.io/${article.image}` ||
                  "https://placehold.co/400"
                }
                alt="Article"
              />

              <div className="articles-header-text">
                <span>{formatDate(article.date)}</span>
                <Link to={article.url || ""} className="article-link">
                  <h3
                    dangerouslySetInnerHTML={{ __html: article.title || "" }}
                  ></h3>
                </Link>
              </div>
            </div>

            <div className="filters-body">
              <p dangerouslySetInnerHTML={{ __html: article.body || "" }}></p>
            </div>

            <div className="filters-footer">
              <b>{article.author}</b>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;
