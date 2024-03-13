import React from "react";
import "./SortOptions.scss";

interface SortOptionsProps {
  sortByDate: boolean;
  sortByTitleAsc: boolean;
  sortByTitleDesc: boolean;
  handleSortByDateChange: () => void;
  handleSortByTitleAscChange: () => void;
  handleSortByTitleDescChange: () => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortByDate,
  sortByTitleAsc,
  sortByTitleDesc,
  handleSortByDateChange,
  handleSortByTitleAscChange,
  handleSortByTitleDescChange,
}) => {
  return (
    <div className="sort-container">
      <h3>Sort By</h3>
      <div className="sort-label-wrapper">
        <label>
          <input
            type="checkbox"
            checked={sortByDate}
            onChange={handleSortByDateChange}
          />
          Date
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortByTitleAsc}
            onChange={handleSortByTitleAscChange}
          />
          Title (Asc)
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortByTitleDesc}
            onChange={handleSortByTitleDescChange}
          />
          Title (Dsc)
        </label>
      </div>
    </div>
  );
};

export default SortOptions;
