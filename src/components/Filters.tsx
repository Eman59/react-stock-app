import React from "react";
import "./Filters.scss";

interface FiltersProps {
  selectedCategory: string | null;
  selectedAuthor: string | null;
  handleCategoryChange: (category: string) => void;
  handleAuthorChange: (author: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  selectedAuthor,
  handleCategoryChange,
  handleAuthorChange,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <h3>Category</h3>
        <div className="filter-label-wrapper">
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Benzinga"}
              onChange={() => handleCategoryChange("Benzinga")}
            />
            Benzinga
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Lambda"}
              onChange={() => handleCategoryChange("Lambda")}
            />
            Lambda
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Delta"}
              onChange={() => handleCategoryChange("Delta")}
            />
            Delta
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Gamma"}
              onChange={() => handleCategoryChange("Gamma")}
            />
            Gamma
          </label>
        </div>
      </div>
      <div className="filter-wrapper">
        <h3>Author</h3>
        <div className="filter-label-wrapper">
          <label>
            <input
              type="checkbox"
              checked={selectedAuthor === "Benzinga Neuro"}
              onChange={() => handleAuthorChange("Benzinga Neuro")}
            />
            Benzinga Neuro
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedAuthor === "Werder Helmner"}
              onChange={() => handleAuthorChange("Werder Helmner")}
            />
            Werder Helmner
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedAuthor === "Patrick Wilson"}
              onChange={() => handleAuthorChange("Patrick Wilson")}
            />
            Patrick Wilson
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
