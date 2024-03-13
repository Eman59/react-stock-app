import React, { useState, useEffect } from "react";
import { useStock } from "../contexts/StockContext";
import Filters from "./Filters";
import SortOptions from "./SortOptions";
import Pagination from "./ArticlePagination";
import "./ArticleList.scss";
import Articles from "./Articles";

const ArticleList: React.FC = () => {
  const { articles, loading, error, filters } = useStock();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    filters.source
  );
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(
    filters.author
  );
  const [sortByDate, setSortByDate] = useState<boolean>(true);
  const [sortByTitleAsc, setSortByTitleAsc] = useState<boolean>(false);
  const [sortByTitleDesc, setSortByTitleDesc] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage] = useState<number>(5);

  let filteredArticles = articles;
  if (selectedCategory) {
    filteredArticles = filteredArticles.filter(
      (article) => article.source === selectedCategory
    );
  }
  if (selectedAuthor) {
    filteredArticles = filteredArticles.filter(
      (article) => article.author === selectedAuthor
    );
  }

  useEffect(() => {
    if (sortByDate) {
      filteredArticles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortByTitleAsc) {
      filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortByTitleDesc) {
      filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
    }
  }, [filteredArticles, sortByDate, sortByTitleAsc, sortByTitleDesc]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleAuthorChange = (author: string) => {
    setSelectedAuthor(author === selectedAuthor ? null : author);
  };

  const handleSortByDateChange = () => {
    setSortByDate(true);
    setSortByTitleAsc(false);
    setSortByTitleDesc(false);
  };

  const handleSortByTitleAscChange = () => {
    setSortByDate(false);
    setSortByTitleAsc(true);
    setSortByTitleDesc(false);
  };

  const handleSortByTitleDescChange = () => {
    setSortByDate(false);
    setSortByTitleAsc(false);
    setSortByTitleDesc(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="filter-section">
        <Filters
          selectedCategory={selectedCategory}
          selectedAuthor={selectedAuthor}
          handleCategoryChange={handleCategoryChange}
          handleAuthorChange={handleAuthorChange}
        />

        <SortOptions
          sortByDate={sortByDate}
          sortByTitleAsc={sortByTitleAsc}
          sortByTitleDesc={sortByTitleDesc}
          handleSortByDateChange={handleSortByDateChange}
          handleSortByTitleAscChange={handleSortByTitleAscChange}
          handleSortByTitleDescChange={handleSortByTitleDescChange}
        />
      </div>

      <div>
        <Articles currentArticles={currentArticles} />

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ArticleList;
