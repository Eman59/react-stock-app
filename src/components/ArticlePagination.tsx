/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ArticlePagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <a onClick={() => paginate(currentPage - 1)}>
          <img src="/assets/chevron-left.svg" alt="left-chevron" />
        </a>
      ) : (
        <a>
          <img
            src="/assets/chevron-left.svg"
            alt="left-chevron"
            style={{ opacity: "0.3" }}
          />
        </a>
      )}
      <ul>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "current-page" : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      {currentPage < totalPages ? (
        <a onClick={() => paginate(currentPage + 1)}>
          <img src="/assets/chevron-right.svg" alt="right-chevron" />
        </a>
      ) : (
        <a>
          <img
            src="/assets/chevron-right.svg"
            alt="left-chevron"
            style={{ opacity: "0.3" }}
          />
        </a>
      )}
    </div>
  );
};

export default Pagination;
